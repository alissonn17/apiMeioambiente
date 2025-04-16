# API TECNÓLOGIA E MEIO-AMBIENTE V1.0.0

#### Esta API contém:

- 10 Cidades brasileiras e suas maiores tecnológias.
- 10 Países e suas contribuições para o planeta.



## Documentação da API

### Rotas:
    GET /

    GET /user/

    POST /user/cadastra

    GET /city/

    GET /city/destaque

    GET /city/descricao

    GET /country/

    GET /country/destaque

    GET /country/descricao

### Exemplos:

### Retorna todas as informações da API:

```http
  GET /
```

```http
{
    "Main": {
        "Importancia": "É importante saber sobre como cuidar o planeta, aqui temos informações sobre este assunto veja cidades brasileiras e como avançam tecnológicamente e países que mais cuidam do meio ambiente",
        "Dever": "Devemos cuidar do nosso planeta como cuidamos da nossa casa, afinal de contas é a nossa casa!"
    }
}
```

### Retorna todos os users cadastrados:

```http
  GET /user/
```

```http
{
    "user": [
        {
            "id": "987c7aa0-28af-4542-b5bf-027115bc5f1d",
            "nome": "higor",
            "idade": 40,
            "email": "higr@email.com",
            "telefone": "(11)99346-4628"
        }
    ]
}
```

### Cadastra o usuário:

```http
  POST /user/cadastra
```

```http
{
    "user": {
        "id": "987c7aa0-28af-4542-b5bf-027115bc5f1d",
        "nome": "higor",
        "idade": 40,
        "email": "higr@email.com",
        "telefone": "(11)99346-4628"
    }
}
```

### Retorna todas as cidades:

```http
  GET /city/
```


```http
{
    "city": {
        "Sao Paulo": 22990000,
        "Rio de Janeiro": 13923200,
        "Curitiba": 3889140,
        "Belo Horizonte": 6351680,
        "Fortaleza": 4284450,
        "Brasília": 2982818,
        "Porto Alegre": 2391000,
        "Belém": 1398531,
        "Manaus": 2279686,
        "Recife": 1587707
    }
}
```

#### Retorna todas as cidades com destaques:

```http
  GET /city/destaque
```
```http
{
    "city": {
        "Sao Paulo": {
            "destaqueTecnologico": "Polo de startups, big data e Internet das Coisas (IoT)"
        },
        "Rio de Janeiro": {
            "destaqueTecnologico": "Monitoramento ambiental e cidades inteligentes"
        },
        "Curitiba": {
            "destaqueTecnologico": "Urbanismo inteligente e transporte inovador"
        }
    }
}
```

#### Retorna todas as cidades com sua descrição tecnológica:

```http
  GET /city/descricao
```
```http
{
    "city": {
        "Sao Paulo": {
            "descricao": "Como o maior polo de startups do país, São Paulo concentra hubs tecnológicos, incubadoras e aceleradoras que fomentam novas empresas e soluções inovadoras. O setor de Big Data e Internet das Coisas (IoT) é especialmente forte, sendo amplamente aplicado em indústrias, serviços financeiros e varejo para otimizar processos e oferecer experiências mais eficientes."
        },
        "Rio de Janeiro": {
            "descricao": "O Rio tem grande destaque no monitoramento ambiental e na implementação de cidades inteligentes. A presença de centros de pesquisa em sustentabilidade e tecnologia aplicada à gestão urbana ajuda na preservação do meio ambiente e melhora a infraestrutura urbana. Projetos como sistemas de sensores para controle climático e segurança pública são testados e aplicados na cidade."
        },
        "Curitiba": {
            "descricao": "Reconhecida internacionalmente pelo seu planejamento urbano inovador, Curitiba é referência em urbanismo inteligente e transporte inovador. O conceito de transporte público sustentável, como o sistema de BRT (Bus Rapid Transit), serviu de modelo para outras cidades no Brasil e no mundo. Além disso, tecnologias voltadas para eficiência energética e mobilidade estão constantemente em evolução na cidade."
        }
    }
}
```
#### Retorna a cidade pelo nome parâmetro:

```http
  GET /city/:nome
```
Retorna o parâmetro:
   - Busca feita com sucesso:

```http
  GET /city/Sao Paulo
```

```http
{
    "CityInfo": [
        "Sao Paulo habitantes: 22990000",
        {
            "destaqueTecnologico": "Polo de startups, big data e Internet das Coisas (IoT)"
        },
        {
            "descricao": "Como o maior polo de startups do país, São Paulo concentra hubs tecnológicos, incubadoras e aceleradoras que fomentam novas empresas e soluções inovadoras. O setor de Big Data e Internet das Coisas (IoT) é especialmente forte, sendo amplamente aplicado em indústrias, serviços financeiros e varejo para otimizar processos e oferecer experiências mais eficientes."
        }
    ]
}
```
  - Caso aconteça um erro na busca:
```http
{
    "Erro": "Cidade não encontrada!!!"
}
```

### Retorna todas os paises:

```http
  GET /country/
```
```http
{
    "country": {
        "Suecia": "Cerca de 10,5 milhões de habitantes.",
        "Noruega": "Aproximadamente 5,5 milhões de habitantes.",
        "Dinamarca": "Cerca de 5,9 milhões de habitantes.",
        "Alemanha": "Aproximadamente 84,7 milhões de habitantes.",
        "Costa Rica": "Cerca de 5,2 milhões de habitantes.",
        "Finlândia": "Cerca de 5,6 milhões de habitantes.",
        "Nova Zelândia": "Aproximadamente 5,1 milhões de habitantes.",
        "Uruguai": "Cerca de 3,5 milhões de habitantes.",
        "Portugal": "Aproximadamente 10,4 milhões de habitantes.",
        "França": "Cerca de 66,4 milhões de habitantes."
    }
}
```

#### Retorna todas os paises com seus destaques:

```http
  GET /country/destaque
```
```http
{
    "country": {
        "Suecia": "Reconhecida por suas políticas ambientais avançadas, a Suécia investe em energia renovável e reciclagem, além de ter metas ambiciosas para reduzir as emissões de carbono.",
        "Noruega": "Este país lidera em transporte sustentável, com incentivos para veículos elétricos e um compromisso com a neutralidade de carbono.",
        "Dinamarca": "Famosa por sua energia eólica, a Dinamarca tem um dos sistemas de energia mais limpos do mundo e promove estilos de vida sustentáveis.",
        "Alemanha": "Com políticas rigorosas de reciclagem e investimentos em energia solar e eólica, a Alemanha é um exemplo de economia verde."
    }
}
```

#### Retorna todas os paises com suas desquições:

```http
  GET /country/descricao
```
```http
{
    "country": {
        "Suecia": "A Suécia é líder em energia renovável, com grande uso de energia hidrelétrica e biomassa. Além disso, implementa políticas rigorosas de reciclagem e tem um dos menores índices de emissão de carbono per capita do mundo.",
        "Noruega": "A Noruega se destaca por sua transição para veículos elétricos, oferecendo incentivos fiscais e infraestrutura robusta. Também investe em captura e armazenamento de carbono e na preservação de seus vastos recursos naturais.",
        "Dinamarca": "A Dinamarca é reconhecida por sua energia eólica, que atende a uma grande parte de suas necessidades energéticas. O país também promove o uso de bicicletas como meio de transporte sustentável.",
        "Alemanha": "A Alemanha é pioneira na transição energética, conhecida como 'Energiewende', com foco em energia solar e eólica. O país também adota políticas rigorosas de controle de emissões industriais e incentiva a economia circular."
    }
}
```
#### Retorna o país com nome parâmetro:

```http
  GET /country/:nome
```
Retorna o parâmetro:
   - Busca feita com sucesso:

```http
  GET /country/Suecia
```
```http
{
    "CountryInfo": [
        "Suecia habitantes: Cerca de 10,5 milhões de habitantes.",
        "Reconhecida por suas políticas ambientais avançadas, a Suécia investe em energia renovável e reciclagem, além de ter metas ambiciosas para reduzir as emissões de carbono.",
        "A Suécia é líder em energia renovável, com grande uso de energia hidrelétrica e biomassa. Além disso, implementa políticas rigorosas de reciclagem e tem um dos menores índices de emissão de carbono per capita do mundo."
    ]
}
```
  - Caso aconteça um erro na busca:
```http
{
    "Erro": "País não encontrado!!!"
}
```

## Rodando os testes

- ### Para rodar os testes, rode o seguinte comando no terminal primeiro:

```bash
  npm i 
```

- #### Ápos rodar este link no navegador:
   - http://localhost:3000


## Funcionalidades

- Consulta de user
- Cadastro de user
- Consulta de cidades e suas tecnologias
- Consulta de paises e suas lutas pelo meio-ambiente

