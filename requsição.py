import requests
import json
import random
import time

# Base URL
base_url = 'https://oxyfish.glitch.me/api'

# Headers
headers = {
    'Content-Type': 'application/json'
}

# Function to handle requests
def post_request(url, data, headers=headers):
    response = requests.post(url, headers=headers, data=json.dumps(data))
    print(f'POST {url}: {response.status_code}, {response.json()}')
    return response

def get_request(url, headers):
    response = requests.get(url, headers=headers)
    print(f'GET {url}: {response.status_code}, {response.json()}')
    return response

def put_request(url, data, headers):
    response = requests.put(url, headers=headers, data=json.dumps(data))
    print(f'PUT {url}: {response.status_code}, {response.json()}')
    return response

def delete_request(url, headers):
    response = requests.delete(url, headers=headers)
    print(f'DELETE {url}: {response.status_code}, {response.json()}')
    return response

# Authenticate and get token
auth_response = post_request(f'{base_url}/auth/register', {
    'username': 'new_user',
    'password': 'secure_password'
})

token = auth_response.json().get('token')

if token:
    headers['Authorization'] = f'Bearer {token}'

# Make sure the user is logged in
login_response = post_request(f'{base_url}/auth/login', {
    'username': 'new_user',
    'password': 'secure_password'
})

if login_response.status_code == 200:
    print('Login successful')
else:
    print('Login failed')
    exit()

# Leitura data for associations
criatorio_response = post_request(f'{base_url}/criatorio', {
    'nome': 'Novo Criatório',
    'localizacao': 'Localização Exemplo'
})

leitura_response = post_request(f'{base_url}/leitura', {
    'criatorio_id': criatorio_response.json().get('id'),
    'data_hora': '2023-06-15T14:30:00Z'
})

leitura_id = leitura_response.json().get('id')

# Insert random data into temperatura, ph, and oxigenio
def random_value(min_val, max_val):
    return round(random.uniform(min_val, max_val), 2)

# Create random data for temperature, pH, and oxygen
for _ in range(10):  # Number of random inserts
    # Insert temperatura
    temperatura_valor = random_value(20.0, 30.0)
    temperatura_data = {
        'leitura_id': leitura_id,
        'valor': temperatura_valor
    }
    temperatura_response = post_request(f'{base_url}/temperatura', temperatura_data, headers)
    if not (20.0 <= temperatura_valor <= 30.0):
        print(f'res.status(400).json({{ message: "Valor de temperatura {temperatura_valor} está fora do intervalo aceitável." }})')

    # Insert ph
    ph_valor = random_value(6.0, 9.0)
    ph_data = {
        'leitura_id': leitura_id,
        'valor': ph_valor
    }
    ph_response = post_request(f'{base_url}/ph', ph_data, headers)
    if not (6.0 <= ph_valor <= 9.0):
        print(f'res.status(400).json({{ message: "Valor de pH {ph_valor} está fora do intervalo aceitável." }})')

    # Insert oxigenio
    oxigenio_valor = random_value(5.0, 10.0)
    oxigenio_data = {
        'leitura_id': leitura_id,
        'valor': oxigenio_valor
    }
    oxigenio_response = post_request(f'{base_url}/oxigenio', oxigenio_data, headers)
    if not (5.0 <= oxigenio_valor <= 10.0):
        print(f'res.status(400).json({{ message: "Valor de oxigênio {oxigenio_valor} está fora do intervalo aceitável." }})')

    # Pause between requests to avoid overloading the server
    time.sleep(1)

print("All data inserted successfully.")
