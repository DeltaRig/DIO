def calcular_T(n):
    T1 = 1  # Base case: T(1) = O(1)
    fator = 3  # Multiplicador constante
    soma = 0  # Soma acumulada dos termos não homogêneos
    k = 0  # Contador de iterações
    
    while n / (2**k) >= 1:
        termo_nao_homogeneo = (fator**k) * (n / (2**k))
        soma += termo_nao_homogeneo
        k += 1
    
    termo_homogeneo = fator**(k-1) * T1
    resultado = termo_homogeneo + soma
    return resultado

# Teste do algoritmo
n = 0
print(f"T({n}) =", calcular_T(n))
