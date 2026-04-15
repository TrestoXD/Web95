function sobremiEXE(){
    WindowExe('Sobremi.txt', 500, height, null, null, true, `
        <div class="notepad">
            <button>File</button>
            <button>Edit</button>
            <button>Search</button>
            <button>Help</button>
            <div style="height:calc(${height}px - 49px)">
    <pre>  
    ============================
    Mi nombre es Vito Minaya González
    ============================

    Me encanta la Ciencia y la tecnologia.

    Poseo conocimientos en varios lenguajes de programación 
    como js, python, c, c++, c#, java y rust.

    =========================================
    He hecho una variedad de proyectos extensa como:

    · 2 GameJAMS - con uso Unity.

    · Este mismo portafolio - con uso de js y sin librerias.

    · Engine en 3D - en java.

    · Asistente de Contenido multimedia - en rust.


    </pre>
            </div>
        </div>
        `);
}