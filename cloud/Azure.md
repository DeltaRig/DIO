# 💻 Creating and Configuring a Virtual Machine on Microsoft Azure

This repository aims to document the hands-on experience gained during the DIO lab on creating and configuring virtual machines on the **Microsoft Azure** platform.

## 1. Accessing the Azure Portal

The first step is to access the Azure portal: [https://portal.azure.com](https://portal.azure.com)

- Create an account or sign in with your existing account  
- Explore the initial dashboard

**Azure Portal image:**  
![Portal do Azure](/images/portal-azure.png) <!-- [image] -->

---

## 2. Creating a Virtual Machine

Steps performed:

1. In the Azure menu, select **"Virtual Machines"**
2. Click **"Create" > "Virtual Machine"**
3. Fill in the required fields:
   - Resource Group
   - Machine name
   - Region
   - Image (e.g., Ubuntu Server 20.04 LTS)
   - VM size
   - Username and password/SSH key
4. Configure inbound port rules (e.g., enable RDP or SSH)

**Virtual Machine creation image:**  
![Criação da VM](/images/criacao-vm.png) <!-- [image] -->

---

## 3. Connecting to the Virtual Machine

- Access via SSH (Linux/macOS) or RDP (Windows)  
- Copy the generated public IP address and use the terminal or RDP client

```bash
ssh username@public_ip
```

4. Important Tips
Use network security groups to control inbound and outbound traffic

Shut down VMs when not in use to avoid unnecessary charges

Take VM snapshots before making major changes

Automate tasks using startup scripts

📎 Referências
[Official Azure Documentation](learn.microsoft.com/en-us/azure/)
[Curso na DIO - Cloud Com Inteligência Artificial](https://web.dio.me/track/xp-inc-cloud-com-inteligencia-artificial)