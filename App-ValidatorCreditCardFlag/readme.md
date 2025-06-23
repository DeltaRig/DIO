# 💳 Credit Card Flag Identifier

This project is a simple JavaScript application designed to **identify the brand (flag) of a credit card**, such as Visa, MasterCard, Elo, and others, based on the card number provided. It also implements **Luhn’s Algorithm (also known as modulus 10 or mod 10)** to validate the authenticity of the card number.

---

## 🎯 Project Objective

The goal is to input a credit card number and return the corresponding **card brand**, if recognized.

> 🛍️ Example context: Imagine a small business that accepts only specific credit card brands for promotions or payment processing. This tool helps instantly determine whether a card is valid and supported.

---

## 🧠 Technologies & Tools

- **JavaScript** for core logic
- **Regex** patterns for identifying card brands
- **Luhn Algorithm** for card number validation
- Developed with assistance from **GitHub Copilot**, showcasing how AI can boost productivity and suggest code efficiently

---

## 📋 Brand Identification Rules

The card flag is identified based on well-known numeric prefixes. The application uses the following rule set:

| Brand              | Starts With                                               |
|--------------------|-----------------------------------------------------------|
| **Visa**           | 4                                                         |
| **MasterCard**     | 51–55 or 2221–2720                                        |
| **Elo**            | 4011, 4312, 4389, 4514, 4576, 5041, 5066–5090, 6277, 6362–6363 |
| **American Express** | 34 or 37                                                |
| **Discover**       | 6011, 65, or 644–649                                      |
| **Hipercard**      | 6062                                                      |

---

## 🧪 Code

if have new flags add the regex in cardPatterns variable