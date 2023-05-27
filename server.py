import http.server
import urllib.parse
import json

class MyHTTPRequestHandler(http.server.BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin',
                         'http://localhost:3000')
        self.send_header('Access-Control-Allow-Methods', 'POST')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length).decode()
        parsed_data = json.loads(post_data)
        name = parsed_data.get('name', '')
        email = parsed_data.get('email', '')
        project = parsed_data.get('project', '')
        print('Name:', name)
        print('Email:', email)

        # Create a dictionary with the form data
        form_data = {
            'Name': name,
            'Email': email,
            'Project': project
        }

        # Read existing form data from file, if any
        existing_data = []
        try:
            with open('form_data.txt', 'r') as file:
                existing_data = file.readlines()
        except FileNotFoundError:
            pass

        # Check if the last entry in the existing data is an empty line
        if existing_data and existing_data[-1] != '\n':
            existing_data.append('\n')

        # Find the last array number used in the existing data
        last_array_number = 0
        for line in existing_data:
            if line.startswith('Array '):
                array_number = int(line.split(':')[0].split(' ')[1])
                if array_number > last_array_number:
                    last_array_number = array_number

        # Increment the array number for the new form data
        new_array_number = last_array_number + 1

        # Append the new form data to the list
        existing_data.append('Array {}:'.format(new_array_number))
        for key, value in form_data.items():
            existing_data.append(f'{key}: {value}')
        existing_data.append('')

        # Write the updated form data to the text file
        with open('form_data.txt', 'w') as file:
            file.write('\n'.join(existing_data))

        # Send a response
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin',
                         'http://localhost:3000')
        self.send_header('Access-Control-Allow-Methods', 'POST')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Content-type', 'text/html; charset=utf-8')
        self.end_headers()

        success_message = """
                <!DOCTYPE html>
                <html lang='en'>
                <body>
                    <h1>Form submitted successfully!</h1>
                    <h3>Thank you for your reviewing.</h3>
                    <a href="http://localhost:5500/index.html"><button>Go to Home</button></a>
                </body>
                </html>     
                """
        self.wfile.write(success_message.encode())


if __name__ == '__main__':
    server_address = ('', 8000)
    httpd = http.server.HTTPServer(server_address, MyHTTPRequestHandler)
    httpd.serve_forever()
