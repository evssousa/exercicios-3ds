PROFESSOR: EVERSON SOUSA | TURMA: 2º EM DESENVOLVIMENTO DE SISTEMAS

DATA DE ENTREGA: 18/nov

# 📌 PROJETO 3 - RELATÓRIO DE FOOTPRINT E SCAN

## Instruções de formatação

- Papel: **A4** (210 × 297 mm)
- Fonte: **Arial**, tamanho **12 pt** em todo o documento (títulos podem usar 14 pt).
- Espaçamento entre linhas: **1.15**.
- Numeração de páginas no rodapé (iniciar a numeração a partir da capa).
- A capa deve conter obrigatoriamente (centralizado na página):
    - Linha 1 (título grande): **Projeto 3 - Relatório de Footprint e Scan do site "site_aqui"**
    - Linha 2: Nome do aluno
    - Linha 3: Turma / Curso
    - Linha 4: Data de entrega
- O arquivo deve ser impresso e entregue fisicamente.

### 🎯 **Objetivo**

Executar um reconhecimento público (footprinting) e um scan de serviços (Nmap) sobre um domínio, organizando todas as evidências em um relatório técnico impresso que demonstre passo a passo o trabalho realizado e as conclusões.

> Alvo: substitua site_aqui pelo domínio.
> 

## O documento deve conter:

1. **Capa** (conforme instruções acima).
2. **Sumário** (página com seção e numeração).
3. **Introdução** — objetivo do relatório e escopo (domínio testado; lembrar: autorização).
4. **Metodologia** — lista de ferramentas e sequência de ações (quemis/host/dig/nmap etc).
5. **Resultados** — seções com as saídas coletadas e explicadas:
    - WHOIS (trecho relevante: nameservers, registrante, datas)
    - Nameservers e IP(s) encontrados (com comando usado e saída)
    - WAF / Firewall (resultado do wafw00f)
    - `robots.txt` (conteúdo)
    - Subdomínios encontrados (crt.sh / dnsrecon / dnsenum / brute)
    - Resultado(s) do Nmap (resumo e trechos principais; incluir a saída de `sV` e as portas importantes)
    - Observações sobre CDN/WAF (se aplicável)
6. **Evidências** — prints de terminal / trechos copiados (organizados) e referência ao arquivo XML do Nmap salvo.
7. **Conclusão** — análise resumida: principais achados, riscos mais relevantes, e sugestão de próximos passos (ex.: “revisar .htaccess”, “proteger painel admin”, “configurar WAF corretamente”).
8. **Referências / Ferramentas utilizadas** — lista das ferramentas e sites (ver seção final obrigatória).
9. **Anexos** — Inclusão de saídas completas ou prints adicionais.

> Obs.: por ser impresso, inclua apenas os trechos essenciais das saídas (não cole arquivos XML inteiros). Para saídas muito longas, deixe uma captura de tela (print) e um resumo textual.
> 

---

## Ferramentas mínimas que devem ser usadas (incluir na seção de Referências)

- `whois`
- `host` ou `dig`
- `wafw00f`
- `dnsenum` e/ou `dnsrecon`
- `crt.sh` (pesquisa web)
- `curl` (para `/robots.txt`)
- `nmap` (linha de comando; salve resultados em XML)

---

## Checklist de entrega (colar no final do impresso)

- [ ]  Capa conforme modelo (título com `site_aqui`, nome, turma, data).
- [ ]  Sumário.
- [ ]  Introdução e escopo com declaração de autorização.
- [ ]  WHOIS: saída com nameservers (trecho).
- [ ]  IP(s) e provedor (trecho de host/dig e whois do IP, se aplicável).
- [ ]  Resultado do wafw00f (trecho).
- [ ]  Conteúdo do `/robots.txt` (trecho).
- [ ]  Subdomínios (evidências de crt.sh / dnsrecon).
- [ ]  Nmap: resumo das portas/serviços (incluir trechos e nome do XML salvo).
- [ ]  Prints/trechos de terminal organizados como evidência.
- [ ]  Conclusão com 3 recomendações práticas.
- [ ]  Referências / lista de ferramentas utilizadas.
- [ ]  Documento impresso em **Arial 12**, margens 2,5 cm.

---

## Critérios de avaliação

- **Completude** — todas as seções obrigatórias presentes.
- **Evidências** — saídas, prints e arquivos salvos (incluindo `nmap_site_aqui.xml`) adequadamente citados.
- **Organização e clareza** — estrutura lógica, sumário, títulos, legibilidade impressa.
- **Análise/Conclusão** — interpretação dos dados e recomendações práticas.
- **Formatação/Entrega** — fonte Arial 12, margens, capa, entrega individual impressa.

---

## Modelo de capa

(Centralizar tudo na capa — usar fonte 14pt para o título)

```
Projeto 3 - Relatório de Footprint e Scan do site "site_aqui"

Nome do aluno: Seu Nome Completo
Turma / Curso: 2º EM Desenvolvimento de Sistemas
Entrega: [data]

```

---

## Modelo de Sumário (exemplo)

```
Sumário
1. Introdução ..................................... 1
2. Metodologia ................................... 2
3. Resultados
   3.1 WHOIS ..................................... 3
   3.2 Nameservers e IPs ........................ 4
   3.3 WAF / wafw00f ............................. 5
   3.4 robots.txt ................................ 6
   3.5 Subdomínios (crt.sh / dnsrecon) .......... 7
   3.6 Nmap — resumo ............................ 8
4. Conclusão ..................................... 9
5. Referências / Ferramentas .................... 10
6. Anexos (prints / arquivos) .................. 11

```

---

## Exemplo de trecho a incluir no relatório (template de seção WHOIS)

```
3.1 WHOIS
Comando executado:
> whois site_aqui

Trecho relevante:
Nameservers:
- ns1.dns-parking.com
- ns2.dns-parking.com

Registrante: [colocar trecho]
Data de criação: [colocar trecho]

```

---

## Referências / Ferramentas (para imprimir no final do relatório — obrigatórias)

- whois (cliente CLI)
- host / dig (DNS lookup)
- wafw00f — https://github.com/EnableSecurity/wafw00f
- dnsrecon — https://github.com/darkoperator/dnsrecon
- dnsenum — https://github.com/fwaeytens/dnsenum (ou o pacote da distro)
- crt.sh — Certificate Transparency search ([https://crt.sh](https://crt.sh/))
- curl — https://curl.se
- nmap — https://nmap.org
- (Opcional) gobuster / ffuf — para brute-force de diretórios/subdomínios

> Importante: ao entregar impresso, inclua a lista acima na seção “Referências / Ferramentas utilizadas”, marcando quais você usou efetivamente no projeto.
>
