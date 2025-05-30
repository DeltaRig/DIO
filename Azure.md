# 💻 Criando e Configurando uma Máquina Virtual no Microsoft Azure

Este repositório tem como objetivo documentar toda a experiência prática adquirida durante o laboratório da DIO sobre criação e configuração de máquinas virtuais na plataforma **Microsoft Azure**.

## 1. Acessando o Portal do Azure

O primeiro passo é acessar o portal do Azure: [https://portal.azure.com](https://portal.azure.com)

- Criar uma conta ou entrar com sua conta existente
- Explorar o painel inicial

**Imagem do portal do Azure:**
![Portal do Azure](/images/portal-azure.png) <!-- [imagem] -->

---

## 2. Criando uma Máquina Virtual

Passos realizados:

1. No menu do Azure, selecionar **"Máquinas Virtuais"**
2. Clicar em **"Criar" > "Máquina Virtual"**
3. Preencher os campos obrigatórios:
   - Grupo de Recursos
   - Nome da máquina
   - Região
   - Imagem (ex: Ubuntu Server 20.04 LTS)
   - Tamanho da máquina
   - Nome de usuário e senha/chave SSH
4. Configurar regras de porta de entrada (ex: habilitar RDP ou SSH)

**Imagem da criação da VM:**
![Criação da VM](/images/criacao-vm.png) <!-- [imagem] -->

---

## 3. Conectando à Máquina Virtual

- Acesso via SSH (Linux/macOS) ou RDP (Windows)
- Copiar o endereço IP público gerado e usar o terminal ou cliente RDP

```
ssh nome_usuario@ip_publico
```

## 4. Dicas Importantes
- Utilize grupos de segurança de rede para controlar o tráfego de entrada e saída

- Desligue as máquinas quando não estiver utilizando para evitar cobranças

- Faça snapshots da VM antes de grandes mudanças

- Automatize tarefas usando scripts de inicialização

📎 Referências
[Documentação Oficial da Azure](https://learn.microsoft.com/pt-br/azure/)

[Curso na DIO - Cloud Com Inteligência Artificial](https://web.dio.me/track/xp-inc-cloud-com-inteligencia-artificial)