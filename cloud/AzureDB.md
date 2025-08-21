# Azure Database Instance Setup Guide
## 📌 Overview

Microsoft Azure offers several options for database services including Azure SQL Database, Azure Database for MySQL, Azure Database for PostgreSQL, and Cosmos DB. This guide will focus on the general steps required to deploy and manage a relational database instance using Azure SQL Database as an example.

[Azure Portal with the "Create SQL Database"](learn.microsoft.com/en-us/azure/azure-sql/database/single-database-create-quickstart?view=azuresql)

---

## ✅ Prerequisites

- A Microsoft Azure account
- Basic understanding of cloud computing concepts
- Familiarity with SQL or relational databases

---

## 🚀 Steps to Create a SQL Database Instance on Azure

### 1. Log in to Azure Portal

Navigate to [https://portal.azure.com](https://portal.azure.com) and sign in with your Microsoft account.

#### If You Need to Install SQL Server Manually on a VM continue in step 2.

#### But If You're Using Azure SQL Database (PaaS)
Then you don't need a VM. Azure SQL Database is a managed service, meaning:
- Microsoft manages the infrastructure
- You just configure and use the database directly
- It's scalable, secure, and fully managed
Then **skip to step 3**.

### 2. Create a Virtual Machine

- Go to 🖥 Virtual Machines, + create
- Image could be 'Windows Server **** Datacenter - x64 Gen1' (check if for your necessity have an better option)
- Review size and pricing carefully to ensure it fits your use case and budget
- Use the VM to install SQL Server manually or host apps that connect to your database

### 3. Create SQL Database

- In Azure Portal, go to 🛢 SQL Databases, then click + Create
- Fill in database name, resource group, and create a new SQL Server if needed
- Choose compute + storage size according to your needs and budget
- Optionally enable geo-redundancy, backups, etc.

🔧 Other option by Azure CLI
```
az sql server create \
  --name my-sql-server \
  --resource-group MyResourceGroup \
  --location eastus \
  --admin-user myadmin \
  --admin-password <password here>!

```

### 4. Create a Resource Group

Whether you're going to create a VM or use Azure SQL Database (PaaS), you always create a Resource Group:

🔧 Option 1: Portal
Go to Resource Groups in the Azure Portal

Click + Create

Fill in:
- Name: e.g., MyResourceGroup
- Region: e.g., East US

🔧 Option 2: Azure CLI
The commands bellow should be run in Azure Cloud Shell or locally with Azure CLI installed

```bash
# Resource groups help manage and organize related resources
az group create --name MyResourceGroup --location eastus
```

**Configure Firewall Rules**
```
az sql server firewall-rule create \
  --resource-group MyResourceGroup \
  --server my-sql-server \
  --name AllowYourIP \
  --start-ip-address <YOUR-IP> \
  --end-ip-address <YOUR-IP>
```

## 🛠️ Next Steps
- Explore automated backups and long-term retention policies.
- Learn how to connect your application to the database securely using Azure Managed Identity.
- Investigate private endpoints to enhance security.

## 📚 Resources

[Quickstart: Create a single database - Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/single-database-create-quickstart?view=azuresql&tabs=azure-portal)

[Azure SQL Documentation](https://learn.microsoft.com/en-us/azure/azure-sql/?view=azuresql)

[Azure CLI Reference - Commands](https://learn.microsoft.com/en-us/cli/azure/sql/db?view=azure-cli-latest)

[Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/)












