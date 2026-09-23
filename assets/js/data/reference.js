/* Datos: cheatsheet y glosario */

const CHEATSHEET = [
 ["Salida y entrada", `print("Hola")\nnombre = input("Nombre: ")\nprint(f"Hola {nombre}")`],
 ["if / elif / else", `if x > 0:\n    ...\nelif x == 0:\n    ...\nelse:\n    ...`],
 ["for", `for i in range(5):\n    print(i)\nfor item in lista:\n    print(item)`],
 ["while", `while condicion:\n    ...\n    break      # salir\n    continue   # siguiente`],
 ["list", `l = [1, 2, 3]\nl.append(4); l.pop(); l.sort()\nlen(l); l[0]; l[-1]; l[1:3]`],
 ["tuple", `t = (1, 2)\nx, y = t   # inmutable`],
 ["set", `s = {1, 2, 2}   # {1, 2}\ns.add(3); a | b; a & b`],
 ["dict", `d = {"k": "v"}\nd["k"]; d.get("x", 0)\nfor k, v in d.items(): ...`],
 ["def", `def f(a, b=2):\n    return a + b\nf(1); f(1, b=5)`],
 ["try / except", `try:\n    ...\nexcept ValueError as e:\n    print(e)\nfinally:\n    ...`],
 ["import", `import math\nfrom random import randint\nimport json as js`],
 ["class", `class A:\n    def __init__(self, x):\n        self.x = x`]
];

const GLOSSARY = [
 ["Variable","Nombre que almacena un valor en memoria. Ej: edad = 20."],
 ["String","Tipo de dato para texto (str), entre comillas: \"Hola\"."],
 ["Integer","Número entero (int), sin decimales: 42."],
 ["Float","Número con decimales: 3.14."],
 ["Boolean","Valor lógico (bool): True o False."],
 ["Lista","Colección ordenada y modificable: [1, 2, 3]."],
 ["Tupla","Colección ordenada e inmutable: (1, 2)."],
 ["Set","Colección sin orden ni duplicados: {1, 2}."],
 ["Diccionario","Colección de pares clave: valor: {\"a\": 1}."],
 ["Función","Bloque de código reutilizable definido con def."],
 ["Clase","Molde para crear objetos con atributos y métodos."],
 ["Objeto","Instancia concreta creada a partir de una clase."],
 ["Método","Función que pertenece a una clase u objeto."],
 ["Módulo","Archivo .py que se puede importar desde otro programa."],
 ["Paquete","Carpeta que agrupa varios módulos."],
 ["API","Interfaz que permite a programas comunicarse, normalmente por HTTP y JSON."],
 ["Exception","Error ocurrido en tiempo de ejecución que puede capturarse con try/except."],
 ["Loop","Bucle: estructura que repite código (for, while)."],
 ["Indentación","Espacios al inicio de la línea que definen bloques en Python."],
 ["pip","Gestor de paquetes de Python para instalar librerías."]
];
