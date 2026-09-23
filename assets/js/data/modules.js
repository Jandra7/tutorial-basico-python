/* Datos: contenido de los 16 módulos del curso */

/* Contenido de los módulos. Cada sección: h (título), p (HTML), code (Python opcional). */
const MODULES = [
{ id:"m1", icon:"🚀", title:"Introducción a Python", kw:"que es python instalacion print primer programa", video:"midu",
  sections:[
  {h:"¿Qué es Python?", p:`<p>Python es un <strong>lenguaje de programación</strong> de alto nivel, interpretado y de propósito general, creado por Guido van Rossum en 1991. Su sintaxis es clara y parecida al lenguaje humano, por eso es ideal para empezar a programar.</p>`},
  {h:"¿Para qué sirve y dónde se utiliza?", p:`<ul>
    <li><strong>Desarrollo web:</strong> frameworks como Django, Flask y FastAPI.</li>
    <li><strong>Automatización:</strong> scripts que renombran archivos, envían correos o llenan formularios.</li>
    <li><strong>Data Science:</strong> análisis de datos con pandas, NumPy y Matplotlib.</li>
    <li><strong>Inteligencia Artificial:</strong> TensorFlow, PyTorch y scikit-learn.</li>
    <li><strong>Scripting:</strong> tareas rápidas del sistema operativo y DevOps.</li></ul>`},
  {h:"¿Por qué aprender Python? Ventajas", p:`<ul><li>Sintaxis simple y legible.</li><li>Enorme comunidad y documentación.</li><li>Miles de librerías gratuitas.</li><li>Multiplataforma (Windows, macOS, Linux).</li><li>Muy demandado en el mercado laboral.</li></ul>`},
  {h:"Instalación y verificación", p:`<p>Descarga Python desde <a href="https://www.python.org/downloads/" target="_blank" rel="noopener">python.org/downloads</a>. En Windows marca la casilla <strong>“Add Python to PATH”</strong>. Luego verifica en la terminal:</p>`,
   code:`python --version\n# o en macOS / Linux\npython3 --version`},
  {h:"Primer programa con print()", p:`<p>La función <code>print()</code> muestra texto en pantalla. Crea un archivo <code>hola.py</code>:</p>`,
   code:`print("¡Hola, mundo!")\nprint("Estoy aprendiendo Python")`},
  {h:"Cómo ejecutar un archivo .py", p:`<p>Abre la terminal en la carpeta del archivo y ejecuta:</p>`, code:`python hola.py`}
  ],
  exercises:[
   {lvl:1,q:"Muestra en pantalla tu nombre y tu ciudad en dos líneas.",sol:`print("Ana")\nprint("La Paz")`},
   {lvl:2,q:"Muestra un mensaje de bienvenida decorado con una línea de guiones arriba y abajo.",sol:`print("-" * 30)\nprint("Bienvenido al curso")\nprint("-" * 30)`},
   {lvl:3,q:"Dibuja un triángulo de asteriscos de 3 filas usando solo print().",sol:`print("*")\nprint("**")\nprint("***")`}],
  quiz:{q:"Escribe la instrucción para mostrar <code>Hola mundo</code>:", re:/^print\(\s*(["'])¡?hola,? mundo!?\1\s*\)$/i, hint:'print("Hola mundo")'} },

{ id:"m2", icon:"📦", title:"Variables y tipos de datos", kw:"variables string int float bool none type conversion tipos", video:"midu",
  sections:[
  {h:"Variables", p:`<p>Una variable es un <strong>nombre que guarda un valor</strong>. En Python no se declara el tipo: se asigna con <code>=</code>.</p>`,
   code:`nombre = "Ana"\nedad = 20\naltura = 1.65\nes_estudiante = True\nnada = None`},
  {h:"Tipos básicos", p:`<div class="table-wrap"><table><thead><tr><th>Tipo</th><th>Nombre</th><th>Ejemplo</th></tr></thead><tbody>
   <tr><td><code>str</code></td><td>String (texto)</td><td><code>"Hola"</code></td></tr>
   <tr><td><code>int</code></td><td>Integer (entero)</td><td><code>42</code></td></tr>
   <tr><td><code>float</code></td><td>Decimal</td><td><code>3.14</code></td></tr>
   <tr><td><code>bool</code></td><td>Booleano</td><td><code>True</code> / <code>False</code></td></tr>
   <tr><td><code>NoneType</code></td><td>Ausencia de valor</td><td><code>None</code></td></tr></tbody></table></div>`},
  {h:"type()", p:`<p>Devuelve el tipo de un valor:</p>`, code:`print(type("Hola"))   # <class 'str'>\nprint(type(10))       # <class 'int'>\nprint(type(2.5))      # <class 'float'>\nprint(type(True))     # <class 'bool'>`},
  {h:"Conversión de tipos: int(), float(), str(), bool()", p:``,
   code:`numero = int("25")        # 25\ndecimal = float("3.5")    # 3.5\ntexto = str(100)          # "100"\nprint(bool(0), bool(1))   # False True\nprint(bool(""))           # False (string vacío)`}
  ],
  exercises:[
   {lvl:1,q:"Crea una variable con tu nombre y muéstrala.",sol:`nombre = "Carlos"\nprint(nombre)`},
   {lvl:1,q:"Crea una variable con tu edad y muestra su tipo.",sol:`edad = 21\nprint(type(edad))`},
   {lvl:2,q:"Convierte el string \"42\" a número y súmale 8.",sol:`numero = int("42")\nprint(numero + 8)  # 50`},
   {lvl:3,q:"Muestra en una línea: nombre, edad y si es estudiante usando print() con comas.",sol:`nombre = "Lucía"\nedad = 19\nes_estudiante = True\nprint("Nombre:", nombre, "| Edad:", edad, "| Estudiante:", es_estudiante)`}],
  quiz:{q:"¿Qué función muestra el tipo de dato de una variable?", re:/^type(\(\))?$/i, hint:"type"} },

{ id:"m3", icon:"⌨️", title:"Entrada y salida", kw:"input print fstring formateo entrada salida", video:"midu",
  sections:[
  {h:"print() e input()", p:`<p><code>input()</code> pide un dato al usuario y <strong>siempre devuelve un string</strong>. Si necesitas un número, conviértelo.</p>`,
   code:`nombre = input("¿Cuál es tu nombre? ")\nedad = int(input("¿Cuál es tu edad? "))\n\nprint(f"Hola {nombre}, tienes {edad} años.")`},
  {h:"f-strings y formateo", p:`<p>Las <strong>f-strings</strong> (Python 3.6+) permiten insertar variables con <code>{}</code>. También puedes formatear decimales:</p>`,
   code:`precio = 12.5678\nprint(f"Precio: {precio:.2f}")       # Precio: 12.57\nprint("Hola {}".format("Ana"))        # método format()\nprint("Total: " + str(30))            # concatenación`}
  ],
  exercises:[
   {lvl:1,q:"Pide el nombre del usuario y salúdalo.",sol:`nombre = input("Nombre: ")\nprint(f"¡Hola, {nombre}!")`},
   {lvl:2,q:"Pide dos números y muestra su suma.",sol:`a = float(input("Número 1: "))\nb = float(input("Número 2: "))\nprint(f"La suma es {a + b}")`},
   {lvl:3,q:"Pide el precio de un producto y muestra el total con 13% de impuesto con 2 decimales.",sol:`precio = float(input("Precio: "))\ntotal = precio * 1.13\nprint(f"Total con impuesto: {total:.2f}")`}],
  quiz:{q:"Completa: <code>print(___\"Hola {nombre}\")</code> — ¿qué letra va antes de las comillas?", re:/^f$/i, hint:"f"} },

{ id:"m4", icon:"➗", title:"Operadores", kw:"operadores aritmeticos comparacion logicos and or not asignacion", video:"midu",
  sections:[
  {h:"Aritméticos", p:``, code:`print(7 + 3)   # 10 suma\nprint(7 - 3)   # 4 resta\nprint(7 * 3)   # 21 multiplicación\nprint(7 / 2)   # 3.5 división\nprint(7 // 2)  # 3 división entera\nprint(7 % 2)   # 1 módulo (resto)\nprint(2 ** 3)  # 8 potencia`},
  {h:"Comparación (igualdad, desigualdad, mayor y menor)", p:`<p>Devuelven <code>True</code> o <code>False</code>.</p>`, code:`print(5 == 5)   # True  igualdad\nprint(5 != 3)   # True  desigualdad\nprint(5 > 3)    # True  mayor\nprint(5 < 3)    # False menor\nprint(5 >= 5)   # True\nprint(4 <= 3)   # False`},
  {h:"Lógicos: and, or, not", p:``, code:`edad = 20\ntiene_dni = True\nprint(edad >= 18 and tiene_dni)  # True: ambas verdaderas\nprint(edad < 18 or tiene_dni)    # True: al menos una\nprint(not tiene_dni)             # False: invierte`},
  {h:"Asignación", p:``, code:`x = 10\nx += 5   # x = x + 5  -> 15\nx -= 3   # 12\nx *= 2   # 24\nx /= 4   # 6.0\nprint(x)`}
  ],
  exercises:[
   {lvl:1,q:"Calcula el área de un rectángulo de base 8 y altura 5.",sol:`base = 8\naltura = 5\nprint(base * altura)  # 40`},
   {lvl:2,q:"Determina si un número es par usando el operador %.",sol:`n = 14\nprint(n % 2 == 0)  # True`},
   {lvl:3,q:"Verifica si un número está entre 10 y 20 (inclusive) usando and.",sol:`n = 15\nprint(n >= 10 and n <= 20)\n# forma pythónica\nprint(10 <= n <= 20)`}],
  quiz:{q:"¿Cuál es el resultado de <code>10 // 3</code>?", re:/^3$/, hint:"3"} },

{ id:"m5", icon:"🔀", title:"Condicionales", kw:"if elif else condicionales ternario anidadas", video:"midu",
  sections:[
  {h:"if / else", p:`<p>Ejecutan código solo si se cumple una condición. La <strong>indentación</strong> (4 espacios) define el bloque.</p>`,
   code:`edad = 20\n\nif edad >= 18:\n    print("Eres mayor de edad")\nelse:\n    print("Eres menor de edad")`},
  {h:"elif", p:``, code:`nota = 75\n\nif nota >= 90:\n    print("Excelente")\nelif nota >= 70:\n    print("Aprobado")\nelif nota >= 51:\n    print("Suficiente")\nelse:\n    print("Reprobado")`},
  {h:"Condiciones anidadas", p:``, code:`usuario = "admin"\nclave = "1234"\n\nif usuario == "admin":\n    if clave == "1234":\n        print("Acceso concedido")\n    else:\n        print("Clave incorrecta")\nelse:\n    print("Usuario no existe")`},
  {h:"Operador ternario", p:`<p>Un <code>if/else</code> en una sola línea:</p>`, code:`edad = 16\nestado = "mayor" if edad >= 18 else "menor"\nprint(estado)  # menor`}
  ],
  exercises:[
   {lvl:1,q:"Indica si un número es positivo, negativo o cero.",sol:`n = -4\nif n > 0:\n    print("Positivo")\nelif n < 0:\n    print("Negativo")\nelse:\n    print("Cero")`},
   {lvl:2,q:"Pide una edad y muestra si puede votar (18+).",sol:`edad = int(input("Edad: "))\nprint("Puede votar" if edad >= 18 else "No puede votar")`},
   {lvl:3,q:"Calculadora: pide dos números y un operador (+ - * /) y muestra el resultado. Evita dividir por cero.",sol:`a = float(input("A: "))\nb = float(input("B: "))\nop = input("Operador: ")\n\nif op == "+":\n    print(a + b)\nelif op == "-":\n    print(a - b)\nelif op == "*":\n    print(a * b)\nelif op == "/":\n    if b != 0:\n        print(a / b)\n    else:\n        print("No se puede dividir por cero")\nelse:\n    print("Operador no válido")`}],
  quiz:{q:"¿Qué palabra clave se usa para “si no, si...”?", re:/^elif$/i, hint:"elif"} },

{ id:"m6", icon:"📋", title:"Listas", kw:"listas list append insert remove pop sort len indices", video:"midu",
  sections:[
  {h:"Crear listas y acceder a elementos", p:`<p>Una lista es una colección <strong>ordenada y modificable</strong>. Los índices empiezan en <code>0</code>; los negativos cuentan desde el final.</p>`,
   code:`frutas = ["manzana", "pera", "uva"]\nprint(frutas[0])    # manzana\nprint(frutas[-1])   # uva\nprint(frutas[0:2])  # ['manzana', 'pera'] (slicing)`},
  {h:"Modificar y métodos principales", p:``, code:`frutas = ["manzana", "pera", "uva"]\nfrutas[1] = "kiwi"          # modificar\nfrutas.append("mango")      # agregar al final\nfrutas.insert(0, "fresa")   # insertar en posición\nfrutas.remove("uva")        # eliminar por valor\nultima = frutas.pop()       # eliminar el último y devolverlo\nfrutas.sort()               # ordenar\nprint(frutas, len(frutas))  # len() = cantidad`},
  {h:"Recorrer listas", p:``, code:`numeros = [3, 7, 1, 9]\nfor n in numeros:\n    print(n * 2)\n\nfor i, n in enumerate(numeros):\n    print(i, n)`}
  ],
  exercises:[
   {lvl:1,q:"Crea una lista con 3 colores y muestra el segundo.",sol:`colores = ["rojo", "verde", "azul"]\nprint(colores[1])`},
   {lvl:2,q:"Agrega dos números a una lista vacía y muestra su longitud.",sol:`nums = []\nnums.append(5)\nnums.append(10)\nprint(len(nums))  # 2`},
   {lvl:3,q:"Dada una lista de números, calcula la suma y el mayor sin usar sum() ni max().",sol:`nums = [4, 9, 2, 7]\ntotal = 0\nmayor = nums[0]\nfor n in nums:\n    total += n\n    if n > mayor:\n        mayor = n\nprint(total, mayor)  # 22 9`}],
  quiz:{q:"¿Qué método agrega un elemento al final de una lista?", re:/^\.?append(\(\))?$/i, hint:"append"} },

{ id:"m7", icon:"🗂️", title:"Tuplas, Sets y Diccionarios", kw:"tuplas sets conjuntos diccionarios dict tuple", video:"midu",
  sections:[
  {h:"Tuplas", p:`<p>Colección <strong>ordenada e inmutable</strong> (no se puede modificar). Útil para datos fijos como coordenadas.</p>`,
   code:`punto = (10, 20)\nprint(punto[0])      # 10\nx, y = punto         # desempaquetado\n# punto[0] = 5  -> TypeError`},
  {h:"Sets", p:`<p>Colección <strong>sin orden y sin duplicados</strong>. Ideal para eliminar repetidos.</p>`,
   code:`numeros = {1, 2, 2, 3, 3}\nprint(numeros)       # {1, 2, 3}\nnumeros.add(4)\na = {1, 2, 3}\nb = {3, 4}\nprint(a | b)  # unión {1, 2, 3, 4}\nprint(a & b)  # intersección {3}`},
  {h:"Diccionarios", p:`<p>Pares <strong>clave: valor</strong>. Se accede por clave, no por índice.</p>`,
   code:`alumno = {"nombre": "Ana", "edad": 20, "carrera": "Sistemas"}\nprint(alumno["nombre"])\nalumno["edad"] = 21            # modificar\nalumno["ciudad"] = "Cochabamba" # agregar\nprint(alumno.get("nota", 0))   # valor por defecto\nprint(alumno.keys(), alumno.values())`},
  {h:"Diferencias", p:`<div class="table-wrap"><table><thead><tr><th>Estructura</th><th>Sintaxis</th><th>Ordenada</th><th>Modificable</th><th>Duplicados</th></tr></thead><tbody>
   <tr><td>Lista</td><td><code>[1, 2]</code></td><td>Sí</td><td>Sí</td><td>Sí</td></tr>
   <tr><td>Tupla</td><td><code>(1, 2)</code></td><td>Sí</td><td>No</td><td>Sí</td></tr>
   <tr><td>Set</td><td><code>{1, 2}</code></td><td>No</td><td>Sí</td><td>No</td></tr>
   <tr><td>Diccionario</td><td><code>{"a": 1}</code></td><td>Sí (orden de inserción)</td><td>Sí</td><td>Claves no</td></tr></tbody></table></div>`}
  ],
  exercises:[
   {lvl:1,q:"Crea una tupla con los días del fin de semana.",sol:`fin_semana = ("sábado", "domingo")\nprint(fin_semana)`},
   {lvl:2,q:"Elimina los duplicados de la lista [1, 1, 2, 3, 3, 3].",sol:`lista = [1, 1, 2, 3, 3, 3]\nunicos = list(set(lista))\nprint(unicos)`},
   {lvl:3,q:"Crea un diccionario de productos y precios y muestra el total.",sol:`productos = {"pan": 1.5, "leche": 6, "queso": 12}\ntotal = 0\nfor nombre, precio in productos.items():\n    print(f"{nombre}: {precio}")\n    total += precio\nprint("Total:", total)`}],
  quiz:{q:"¿Qué estructura NO permite elementos duplicados?", re:/^(sets?|conjuntos?)$/i, hint:"set"} },

{ id:"m8", icon:"🔁", title:"Bucles", kw:"bucles loops for while range break continue anidados", video:"midu",
  sections:[
  {h:"for y range()", p:`<p><code>range(inicio, fin, paso)</code> genera números; el <code>fin</code> no se incluye.</p>`,
   code:`for i in range(5):\n    print(i)            # 0 1 2 3 4\n\nfor i in range(2, 11, 2):\n    print(i)            # 2 4 6 8 10`},
  {h:"while", p:`<p>Repite mientras la condición sea verdadera. ¡Cuidado con los bucles infinitos!</p>`,
   code:`contador = 1\nwhile contador <= 3:\n    print("Vuelta", contador)\n    contador += 1`},
  {h:"break y continue", p:``, code:`for n in range(10):\n    if n == 5:\n        break       # sale del bucle\n    if n % 2 == 0:\n        continue    # salta a la siguiente vuelta\n    print(n)        # 1 3`},
  {h:"Bucles anidados", p:``, code:`for i in range(1, 4):\n    for j in range(1, 4):\n        print(f"{i} x {j} = {i * j}")`},
  {h:"Iterar listas y diccionarios", p:``, code:`nombres = ["Ana", "Luis"]\nfor nombre in nombres:\n    print(nombre)\n\nedades = {"Ana": 20, "Luis": 22}\nfor nombre, edad in edades.items():\n    print(nombre, "tiene", edad)`}
  ],
  exercises:[
   {lvl:1,q:"Muestra los números del 1 al 10.",sol:`for i in range(1, 11):\n    print(i)`},
   {lvl:2,q:"Muestra la tabla de multiplicar del 7.",sol:`for i in range(1, 11):\n    print(f"7 x {i} = {7 * i}")`},
   {lvl:3,q:"Pide números hasta que el usuario escriba 0 y muestra la suma total.",sol:`total = 0\nwhile True:\n    n = int(input("Número (0 para salir): "))\n    if n == 0:\n        break\n    total += n\nprint("Suma:", total)`}],
  quiz:{q:"¿Cuántas veces se repite <code>for i in range(5):</code>?", re:/^5$|^cinco$/i, hint:"5"} },

{ id:"m9", icon:"🧩", title:"Funciones", kw:"funciones def return parametros argumentos scope", video:"midu",
  sections:[
  {h:"¿Qué es una función? Crear funciones", p:`<p>Una función es un <strong>bloque de código reutilizable</strong> con nombre. Se define con <code>def</code>.</p>`,
   code:`def saludar(nombre):\n    return f"Hola {nombre}"\n\nmensaje = saludar("Ana")\nprint(mensaje)`},
  {h:"Parámetros, argumentos y return", p:`<p>Los <strong>parámetros</strong> son las variables de la definición; los <strong>argumentos</strong> son los valores que envías. <code>return</code> devuelve un resultado.</p>`,
   code:`def sumar(a, b):      # a y b son parámetros\n    return a + b\n\nprint(sumar(3, 4))    # 3 y 4 son argumentos -> 7`},
  {h:"Argumentos opcionales y nombrados", p:``, code:`def presentar(nombre, saludo="Hola"):\n    print(f"{saludo}, {nombre}")\n\npresentar("Luis")                       # Hola, Luis\npresentar("Luis", "Buenos días")        # opcional\npresentar(saludo="Hey", nombre="Mia")   # nombrados`},
  {h:"Scope (alcance)", p:`<p>Las variables creadas dentro de una función son <strong>locales</strong>: no existen fuera.</p>`,
   code:`mensaje = "global"\n\ndef prueba():\n    mensaje = "local"\n    print(mensaje)   # local\n\nprueba()\nprint(mensaje)       # global`}
  ],
  exercises:[
   {lvl:1,q:"Crea una función que devuelva el doble de un número.",sol:`def doble(n):\n    return n * 2\n\nprint(doble(6))  # 12`},
   {lvl:2,q:"Crea una función es_par(n) que devuelva True o False.",sol:`def es_par(n):\n    return n % 2 == 0\n\nprint(es_par(7))  # False`},
   {lvl:3,q:"Crea una función promedio(lista) reutilizable que devuelva 0 si la lista está vacía.",sol:`def promedio(lista):\n    if not lista:\n        return 0\n    return sum(lista) / len(lista)\n\nprint(promedio([8, 9, 10]))  # 9.0\nprint(promedio([]))          # 0`}],
  quiz:{q:"¿Qué palabra clave se usa para definir una función?", re:/^def$/i, hint:"def"} },

{ id:"m10", icon:"🛡️", title:"Manejo de errores", kw:"errores excepciones try except else finally raise exception", video:"midu",
  sections:[
  {h:"Errores comunes", p:`<ul><li><code>SyntaxError</code>: código mal escrito.</li><li><code>NameError</code>: variable no definida.</li><li><code>TypeError</code>: tipo incorrecto (ej. <code>"a" + 1</code>).</li><li><code>ValueError</code>: valor inválido (ej. <code>int("hola")</code>).</li><li><code>ZeroDivisionError</code>: división entre cero.</li><li><code>IndexError</code> / <code>KeyError</code>: índice o clave inexistente.</li></ul>`},
  {h:"try, except, else, finally", p:``, code:`try:\n    n = int(input("Número: "))\n    resultado = 10 / n\nexcept ValueError:\n    print("Debes escribir un número")\nexcept ZeroDivisionError:\n    print("No se puede dividir por cero")\nelse:\n    print("Resultado:", resultado)   # si no hubo error\nfinally:\n    print("Fin del programa")        # siempre se ejecuta`},
  {h:"raise", p:`<p>Lanza un error de forma intencional:</p>`, code:`def retirar(saldo, monto):\n    if monto > saldo:\n        raise ValueError("Saldo insuficiente")\n    return saldo - monto\n\ntry:\n    retirar(100, 500)\nexcept ValueError as e:\n    print("Error:", e)`}
  ],
  exercises:[
   {lvl:1,q:"Convierte \"abc\" a entero capturando el error.",sol:`try:\n    int("abc")\nexcept ValueError:\n    print("No es un número válido")`},
   {lvl:2,q:"Accede a un índice inexistente de una lista y muestra un mensaje amigable.",sol:`lista = [1, 2, 3]\ntry:\n    print(lista[10])\nexcept IndexError:\n    print("Ese índice no existe")`},
   {lvl:3,q:"Crea una función que lance ValueError si la edad es negativa.",sol:`def validar_edad(edad):\n    if edad < 0:\n        raise ValueError("La edad no puede ser negativa")\n    return edad\n\ntry:\n    validar_edad(-5)\nexcept ValueError as e:\n    print(e)`}],
  quiz:{q:"¿Qué bloque se ejecuta SIEMPRE, haya error o no?", re:/^finally$/i, hint:"finally"} },

{ id:"m11", icon:"📚", title:"Módulos y paquetes", kw:"modulos paquetes import from pip requirements entornos virtuales venv librerias", video:"midu",
  sections:[
  {h:"import y from", p:`<p>Un <strong>módulo</strong> es un archivo <code>.py</code>; un <strong>paquete</strong> es una carpeta con módulos; una <strong>librería</strong> es un conjunto de paquetes.</p>`,
   code:`import math\nprint(math.sqrt(16))        # 4.0\n\nfrom random import randint\nprint(randint(1, 6))        # dado\n\nimport datetime as dt       # alias`},
  {h:"Tu propio módulo", p:``, code:`# archivo: utilidades.py\ndef saludar(nombre):\n    return f"Hola {nombre}"\n\n# archivo: main.py\nfrom utilidades import saludar\nprint(saludar("Ana"))`},
  {h:"Entornos virtuales, pip y requirements.txt", p:`<p>Un entorno virtual aísla las librerías de cada proyecto.</p>`,
   code:`python -m venv venv            # crear entorno\nvenv\\Scripts\\activate          # activar (Windows)\nsource venv/bin/activate       # activar (macOS/Linux)\n\npip install requests           # instalar paquete\npip freeze > requirements.txt  # guardar dependencias\npip install -r requirements.txt  # instalar desde archivo`}
  ],
  exercises:[
   {lvl:1,q:"Usa el módulo math para mostrar el valor de pi.",sol:`import math\nprint(math.pi)`},
   {lvl:2,q:"Genera 5 números aleatorios entre 1 y 100.",sol:`from random import randint\nfor _ in range(5):\n    print(randint(1, 100))`},
   {lvl:3,q:"Crea un módulo calculadora.py con sumar y restar e impórtalo desde main.py.",sol:`# calculadora.py\ndef sumar(a, b):\n    return a + b\n\ndef restar(a, b):\n    return a - b\n\n# main.py\nimport calculadora\nprint(calculadora.sumar(5, 3))\nprint(calculadora.restar(5, 3))`}],
  quiz:{q:"Escribe el comando para instalar la librería <code>requests</code>:", re:/^pip3? install requests$/i, hint:"pip install requests"} },

{ id:"m12", icon:"📁", title:"Archivos", kw:"archivos open with leer escribir txt csv json", video:"midu",
  sections:[
  {h:"Abrir, leer y escribir con with open()", p:`<p><code>with</code> cierra el archivo automáticamente. Modos: <code>"r"</code> leer, <code>"w"</code> escribir (sobrescribe), <code>"a"</code> agregar.</p>`,
   code:`with open("notas.txt", "w", encoding="utf-8") as f:\n    f.write("Primera línea\\n")\n\nwith open("notas.txt", "a", encoding="utf-8") as f:\n    f.write("Otra línea\\n")\n\nwith open("notas.txt", "r", encoding="utf-8") as f:\n    for linea in f:\n        print(linea.strip())`},
  {h:"CSV", p:``, code:`import csv\n\nwith open("alumnos.csv", "w", newline="", encoding="utf-8") as f:\n    writer = csv.writer(f)\n    writer.writerow(["nombre", "nota"])\n    writer.writerow(["Ana", 90])\n\nwith open("alumnos.csv", encoding="utf-8") as f:\n    for fila in csv.DictReader(f):\n        print(fila["nombre"], fila["nota"])`},
  {h:"JSON", p:``, code:`import json\n\ndatos = {"curso": "Python", "alumnos": 25}\n\nwith open("datos.json", "w", encoding="utf-8") as f:\n    json.dump(datos, f, indent=2, ensure_ascii=False)\n\nwith open("datos.json", encoding="utf-8") as f:\n    cargado = json.load(f)\nprint(cargado["curso"])`}
  ],
  exercises:[
   {lvl:1,q:"Escribe tu nombre en un archivo nombre.txt.",sol:`with open("nombre.txt", "w", encoding="utf-8") as f:\n    f.write("Ana")`},
   {lvl:2,q:"Cuenta cuántas líneas tiene un archivo.",sol:`with open("notas.txt", encoding="utf-8") as f:\n    print(len(f.readlines()))`},
   {lvl:3,q:"Guarda una lista de diccionarios en JSON y vuelve a leerla.",sol:`import json\ntareas = [{"titulo": "Estudiar", "hecha": False}]\nwith open("tareas.json", "w", encoding="utf-8") as f:\n    json.dump(tareas, f)\nwith open("tareas.json", encoding="utf-8") as f:\n    print(json.load(f))`}],
  quiz:{q:"¿Qué modo de <code>open()</code> se usa para escribir (sobrescribiendo)?", re:/^["']?w["']?$/i, hint:"w"} },

{ id:"m13", icon:"🏗️", title:"Programación orientada a objetos", kw:"poo clases objetos init self atributos metodos herencia encapsulacion class", video:"midu",
  sections:[
  {h:"Clases, objetos y __init__", p:`<p>Una <strong>clase</strong> es un molde; un <strong>objeto</strong> es una instancia creada con ese molde. <code>__init__</code> es el constructor y <code>self</code> representa al propio objeto.</p>`,
   code:`class Perro:\n    def __init__(self, nombre, edad):\n        self.nombre = nombre   # atributo\n        self.edad = edad\n\n    def ladrar(self):          # método\n        return f"{self.nombre} dice: ¡Guau!"\n\nfirulais = Perro("Firulais", 3)\nprint(firulais.ladrar())`},
  {h:"Herencia", p:`<p>Una clase hija reutiliza lo de la clase padre.</p>`,
   code:`class Animal:\n    def __init__(self, nombre):\n        self.nombre = nombre\n\n    def hablar(self):\n        return "..."\n\nclass Gato(Animal):\n    def hablar(self):\n        return f"{self.nombre}: Miau"\n\nprint(Gato("Michi").hablar())`},
  {h:"Encapsulación", p:`<p>Por convención, un atributo con <code>_</code> es “privado” y se accede mediante métodos.</p>`,
   code:`class Cuenta:\n    def __init__(self, saldo):\n        self._saldo = saldo\n\n    def depositar(self, monto):\n        if monto > 0:\n            self._saldo += monto\n\n    def ver_saldo(self):\n        return self._saldo\n\nc = Cuenta(100)\nc.depositar(50)\nprint(c.ver_saldo())  # 150`}
  ],
  exercises:[
   {lvl:1,q:"Crea una clase Persona con nombre y un método presentarse().",sol:`class Persona:\n    def __init__(self, nombre):\n        self.nombre = nombre\n\n    def presentarse(self):\n        print(f"Soy {self.nombre}")\n\nPersona("Ana").presentarse()`},
   {lvl:2,q:"Crea una clase Rectangulo con método area().",sol:`class Rectangulo:\n    def __init__(self, base, altura):\n        self.base = base\n        self.altura = altura\n\n    def area(self):\n        return self.base * self.altura\n\nprint(Rectangulo(4, 5).area())  # 20`},
   {lvl:3,q:"Crea Vehiculo y una clase hija Moto que sobrescriba describir().",sol:`class Vehiculo:\n    def __init__(self, marca):\n        self.marca = marca\n\n    def describir(self):\n        return f"Vehículo {self.marca}"\n\nclass Moto(Vehiculo):\n    def describir(self):\n        return f"Moto {self.marca} de 2 ruedas"\n\nprint(Moto("Honda").describir())`}],
  quiz:{q:"¿Cómo se llama el método constructor de una clase?", re:/^__init__(\(\))?$/, hint:"__init__"} },

{ id:"m14", icon:"📅", title:"Fechas", kw:"fechas datetime horas formatear strftime timedelta", video:"midu",
  sections:[
  {h:"datetime: fechas y horas", p:``, code:`from datetime import datetime, date\n\nahora = datetime.now()\nprint(ahora)                 # fecha y hora actual\nprint(date.today())          # solo fecha\nprint(ahora.year, ahora.month, ahora.day, ahora.hour)`},
  {h:"Formatear fechas", p:`<p><code>strftime()</code> convierte a texto; <code>strptime()</code> convierte texto a fecha.</p>`,
   code:`from datetime import datetime\n\nahora = datetime.now()\nprint(ahora.strftime("%d/%m/%Y %H:%M"))   # 23/09/2026 10:30\n\nfecha = datetime.strptime("15/08/2026", "%d/%m/%Y")\nprint(fecha)`},
  {h:"Diferencia entre fechas", p:``, code:`from datetime import date, timedelta\n\nhoy = date.today()\nexamen = date(2026, 12, 1)\nprint((examen - hoy).days, "días para el examen")\n\nprint(hoy + timedelta(days=7))   # dentro de una semana`}
  ],
  exercises:[
   {lvl:1,q:"Muestra la fecha de hoy en formato día-mes-año.",sol:`from datetime import date\nprint(date.today().strftime("%d-%m-%Y"))`},
   {lvl:2,q:"Calcula tu edad en días a partir de tu fecha de nacimiento.",sol:`from datetime import date\nnacimiento = date(2005, 4, 10)\nprint((date.today() - nacimiento).days)`},
   {lvl:3,q:"Muestra las fechas de los próximos 5 días.",sol:`from datetime import date, timedelta\nhoy = date.today()\nfor i in range(1, 6):\n    print(hoy + timedelta(days=i))`}],
  quiz:{q:"¿Qué módulo estándar se usa para trabajar con fechas?", re:/^datetime$/i, hint:"datetime"} },

{ id:"m15", icon:"🌐", title:"APIs", kw:"api http get post json requests consumir", video:"midu",
  sections:[
  {h:"¿Qué es una API? HTTP, GET, POST y JSON", p:`<p>Una <strong>API</strong> permite que dos programas se comuniquen. En la web se usa <strong>HTTP</strong>:</p>
   <ul><li><strong>GET</strong>: obtener datos.</li><li><strong>POST</strong>: enviar/crear datos.</li><li><strong>JSON</strong>: formato de texto para intercambiar datos, parecido a un diccionario.</li></ul>`},
  {h:"Consumir una API con requests", p:`<p>Instala la librería con <code>pip install requests</code>. Ejemplo con la API pública de prueba JSONPlaceholder:</p>`,
   code:`import requests\n\nurl = "https://jsonplaceholder.typicode.com/users"\nrespuesta = requests.get(url, timeout=10)\n\nif respuesta.status_code == 200:\n    usuarios = respuesta.json()\n    for u in usuarios[:3]:\n        print(u["name"], "-", u["email"])\nelse:\n    print("Error:", respuesta.status_code)`},
  {h:"Enviar datos con POST", p:``, code:`import requests\n\nnuevo = {"title": "Aprender Python", "completed": False}\nr = requests.post("https://jsonplaceholder.typicode.com/todos", json=nuevo, timeout=10)\nprint(r.status_code)   # 201 = creado\nprint(r.json())`}
  ],
  exercises:[
   {lvl:1,q:"Haz un GET a https://jsonplaceholder.typicode.com/posts/1 y muestra el título.",sol:`import requests\nr = requests.get("https://jsonplaceholder.typicode.com/posts/1", timeout=10)\nprint(r.json()["title"])`},
   {lvl:2,q:"Muestra cuántos posts devuelve /posts.",sol:`import requests\nr = requests.get("https://jsonplaceholder.typicode.com/posts", timeout=10)\nprint(len(r.json()))`},
   {lvl:3,q:"Consume la API manejando errores de conexión con try/except.",sol:`import requests\ntry:\n    r = requests.get("https://jsonplaceholder.typicode.com/users", timeout=5)\n    r.raise_for_status()\n    print(len(r.json()), "usuarios")\nexcept requests.RequestException as e:\n    print("Error de conexión:", e)`}],
  quiz:{q:"¿Qué método HTTP se usa para OBTENER datos?", re:/^get$/i, hint:"GET"} },

{ id:"m16", icon:"🕷️", title:"Web Scraping", kw:"web scraping beautifulsoup bs4 requests html extraer", video:"midu",
  sections:[
  {h:"¿Qué es y cuándo utilizarlo?", p:`<p>El <strong>web scraping</strong> extrae información de páginas HTML de forma automática. Úsalo cuando <strong>no exista una API</strong> que ofrezca esos datos.</p>`},
  {h:"Requests + BeautifulSoup", p:`<p>Instala: <code>pip install requests beautifulsoup4</code>. El sitio <em>books.toscrape.com</em> está hecho para practicar.</p>`,
   code:`import requests\nfrom bs4 import BeautifulSoup\n\nurl = "https://books.toscrape.com/"\nhtml = requests.get(url, timeout=10).text\nsoup = BeautifulSoup(html, "html.parser")\n\nfor libro in soup.select("article.product_pod")[:5]:\n    titulo = libro.h3.a["title"]\n    precio = libro.select_one(".price_color").text\n    print(titulo, "-", precio)`},
  {h:"Buenas prácticas", p:`<div class="note warn">⚠️ <strong>Scraping responsable:</strong><ul><li>Revisa los términos de uso y el archivo <code>robots.txt</code>.</li><li>No sobrecargues el servidor: agrega pausas (<code>time.sleep</code>).</li><li>Prefiere una API oficial si existe.</li><li>No extraigas datos personales ni contenido protegido.</li></ul></div>`}
  ],
  exercises:[
   {lvl:1,q:"Obtén el título (&lt;title&gt;) de una página.",sol:`import requests\nfrom bs4 import BeautifulSoup\nsoup = BeautifulSoup(requests.get("https://books.toscrape.com/", timeout=10).text, "html.parser")\nprint(soup.title.text.strip())`},
   {lvl:2,q:"Cuenta cuántos enlaces (&lt;a&gt;) tiene la página.",sol:`links = soup.find_all("a")\nprint(len(links))`},
   {lvl:3,q:"Guarda los títulos y precios de los libros en un CSV.",sol:`import csv\nwith open("libros.csv", "w", newline="", encoding="utf-8") as f:\n    w = csv.writer(f)\n    w.writerow(["titulo", "precio"])\n    for libro in soup.select("article.product_pod"):\n        w.writerow([libro.h3.a["title"], libro.select_one(".price_color").text])`}],
  quiz:{q:"¿Qué librería se usa para analizar HTML en Python?", re:/^(beautiful ?soup4?|bs4)$/i, hint:"BeautifulSoup"} }
];
