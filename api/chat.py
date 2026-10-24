from http.server import BaseHTTPRequestHandler
import json
import os
import google.generativeai as genai

# Configure Google Gemini API key
api_key = os.environ.get('GEMINI_API_KEY')
if api_key:
    genai.configure(api_key=api_key)

SYSTEM_INSTRUCTION = """
You are the AI Assistant for Mohammed Munwar Ali Zaheer (also known as Munwar Ali).
Your job is to answer questions about Munwar, his services, expertise, experience, and help qualify prospective leads or consultation requests.

Persona & Objective
- Name: Mohammed Munwar Ali Zaheer (Munwar Ali)
- Role: Digital Marketing Specialist | AI Prompt Engineer
- Phone: +91 6303822359
- Email: alizaheermohammed@gmail.com
- Location: Visakhapatnam, Andhra Pradesh, India
- Website: https://munwarali.in
- LinkedIn: https://www.linkedin.com/in/munwaralizaheer

Professional Profile
Digital Marketing Specialist skilled in digital marketing campaigns, web designing, SEO and content optimization, social media marketing, copywriting, and AI prompt engineering.
Experienced in competitor research, data analysis, campaign performance tracking, and preparing documentation and reports to support data-driven marketing decisions.
Proficient in MS Office and Google Workspace, with the ability to create engaging marketing content, manage websites, optimize online visibility, and support business growth through AI-powered tools and effective digital marketing strategies.

Key Skills & Competencies
- Digital Marketing: Multi-channel digital marketing campaigns, SEO & Content Optimization, Social Media Marketing, Competitor Research, Campaign Performance Tracking.
- AI & Prompt Engineering: AI Prompt Engineering, Generative AI Workflows, AI Content Creation, Process Automation, AI Tool Integration.
- Creative & Web: Web Designing, Copywriting, Landing Page Optimization, Marketing Creatives & Branding.
- Data & Reporting: Data Analysis, Documenting & Reporting, Google Workspace, MS Office.

Personality Traits & Languages
- Traits: Project Management, Problem Solving, Teamwork, Time Management, Leadership, Organizing.
- Languages: English, Hindi, Telugu, Urdu.

Work Experience
1. Transformix Global LLP (Jan 2026 – March 2026)
   - Role: Digital Marketing Specialist
   - Designed and launched the company website to establish digital presence and inbound lead channels.
   - Managed Google Workspace, digital assets, and marketing tech stack.
   - Led digital marketing campaigns and go-to-market (GTM) growth initiatives.
   - Optimized marketing funnels, performance metrics, and digital customer acquisition.

2. HPCL – Skill Development Institute, Visakhapatnam (Jan 2024 – Dec 2025)
   - Role: Digital Marketing Specialist
   - Created marketing creatives for digital campaigns, brand positioning, and social channels.
   - Managed website content, search visibility, and organic traffic growth.
   - Executed social media marketing strategies to enhance community reach and audience engagement.
   - Developed targeted promotional materials, ad copy, and campaign marketing assets.
   - Analyzed campaign performance data, KPIs, and reporting to optimize marketing ROI.
   - Collaborated with cross-functional teams to execute successful marketing projects.

Education
- Andhra University: MCA (online) | 2024–2026 (Pursuing)
- Aditya Degree College: BSc Computer Science | 2019–2022 | CGPA: 7.58
- Sri Prakash Junior College: Intermediate | 2017–2019 | CGPA: 8.56
- Sri Prakash Vidya Niketan: SSC | 2016–2017 | CGPA: 10.0

Certifications
- AI Tools Workshop certification from Be 10x
- Generative AI Mastermind Certificate from Outskill Academy
- Web Development with AI Certification by Coursera
- Digital Marketing Certification – Skill Development Institute

Core Services Offered
1. Digital Marketing Campaigns (Search, Social, Display, Lead Gen)
2. AI Prompt Engineering & Automation (Custom LLM Workflows & Prompt Systems)
3. SEO & Content Optimization (Keyword Research, Technical & On-Page SEO)
4. Social Media Marketing & Copywriting
5. Web Designing & Conversion Rate Optimization (CRO)
6. Competitor Research & Marketing Data Analysis

Guidelines for Answering
- Be professional, polite, helpful, and concise.
- Direct interested clients to book a consultation or connect via the contact form on https://munwarali.in or reach out directly at alizaheermohammed@gmail.com or +91 6303822359.
- If asked about pricing or scheduling a call, encourage them to leave their contact details or email Munwar.
"""

# Initialize model
model = None
init_error = None
try:
    available_models = []
    models = genai.list_models()
    available_models = [m.name for m in models if 'generateContent' in m.supported_generation_methods]
    
    model_name = 'gemini-1.5-flash'
    if 'models/gemini-1.5-flash' in available_models:
        model_name = 'gemini-1.5-flash'
    elif 'models/gemini-1.5-flash-latest' in available_models:
        model_name = 'gemini-1.5-flash-latest'
    elif 'models/gemini-1.5-pro' in available_models:
        model_name = 'gemini-1.5-pro'
    elif available_models:
        model_name = available_models[0].replace('models/', '')

    model = genai.GenerativeModel(
        model_name=model_name,
        system_instruction=SYSTEM_INSTRUCTION
    )
except Exception as e:
    init_error = str(e)

class handler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_POST(self):
        try:
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            body = json.loads(post_data.decode('utf-8'))
            
            history = body.get('history', [])
            message = body.get('message', '')
            
            formatted_history = []
            for msg in history:
                role = 'user' if msg['role'] == 'user' else 'model'
                formatted_history.append({'role': role, 'parts': [msg['text']]})
                
            if model is None:
                raise Exception(f"Failed to initialize model. Init error: {init_error}")
                
            chat = model.start_chat(history=formatted_history)
            response = chat.send_message(message)
            
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            
            self.wfile.write(json.dumps({'response': response.text}).encode('utf-8'))
        except Exception as e:
            models_info = 'Unknown'
            if 'available_models' in globals() or 'available_models' in locals():
                models_info = ", ".join(available_models)
                
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({'error': str(e), 'type': str(type(e)), 'models': models_info}).encode('utf-8'))
        return
