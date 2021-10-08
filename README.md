# Directivas

Este proyecto fue muy teórico, e introductorio a lo que son las directivas. Estas en pocas palabras extienden la funcionalidad del HTML usando para ello una nueva sintaxis. Con ella podemos usar lógica que será ejecutada en el DOM (Document Object Model).
Las cuales llegamos a poner en practica fueron *directivas de atributo*, por ejemplo, **ngStyle y ngClass**. Que nos permiten alterar la aparencia o comportamiento de un elemento. 

Las *directivas estructurales* son las que nos permiten mediante condicionales modificar la aparencia o comportamiento de un elemento o un grupo de elementos. Anteriormente ya habiamos trabajado con ellos, estos son **ngFor**, **ngIf** y **ngSwitch**.

Otro tema de interes son los metodos que involucran el ciclo de vida de un componente. Estos son *OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy*, creo firmemente que alguno de estos facilitara el trabajo de algunos proyectos que traemos en mente. 

# Rutas
Por ultimo, un tema muy interesante es la creación de rutas padres e hijas, esto con componentes respectivamente. El uso de la etiqueta *router-outlet* dentro de rutas hijas me llamo mucho la atención. 

## Ademas..
- Al crear un componente, podemos agregar --flat para no crear una carpeta.
- Al crear un componente, podemos agregar -is para no crear el archivo de estilos.
- Al crear un componente, podemos agregar -it para no crear el template.
- Al crear un componente, podemos agregar --spec=false para no crear el archivo de testeo.

