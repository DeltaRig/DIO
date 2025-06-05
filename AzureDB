# Azure Database Instance Setup Guide
## 📌 Overview

Microsoft Azure offers several options for database services including Azure SQL Database, Azure Database for MySQL, Azure Database for PostgreSQL, and Cosmos DB. This guide will focus on the general steps required to deploy and manage a relational database instance using Azure SQL Database as an example.

[Azure Portal with the "Create SQL Database"]()

---

## ✅ Prerequisites

- A Microsoft Azure account
- Basic understanding of cloud computing concepts
- Familiarity with SQL or relational databases

---

## 🚀 Steps to Create a SQL Database Instance on Azure

### 1. Log in to Azure Portal

Navigate to [https://portal.azure.com](https://portal.azure.com) and sign in with your Microsoft account.

### 2. Create a Resource Group

```bash
# Resource groups help manage and organize related resources
az group create --name MyResourceGroup --location eastus
```

### 3. Create a SQL Server

```
az sql server create \
  --name my-sql-server \
  --resource-group MyResourceGroup \
  --location eastus \
  --admin-user myadmin \
  --admin-password MyPassword123!

```

### 4. Create a SQL Database

```
az sql db create \
  --resource-group MyResourceGroup \
  --server my-sql-server \
  --name mydatabase \
  --service-objective S0
```

### 5. Configure Firewall Rules
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

(Quickstart: Create a single database - Azure SQL Database)[https://learn.microsoft.com/en-us/azure/azure-sql/database/single-database-create-quickstart?view=azuresql&tabs=azure-portal]

(Azure SQL Documentation)[https://learn.microsoft.com/en-us/azure/azure-sql/?view=azuresql]

(Azure CLI Reference - Commands)[https://learn.microsoft.com/en-us/cli/azure/sql/db?view=azure-cli-latest]

(Pricing Calculator)[https://azure.microsoft.com/en-us/pricing/calculator/]












