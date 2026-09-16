document.addEventListener("DOMContentLoaded", function () {
    console.log("SpringEduManager - app.js cargado");

    // ELIMINAR ALUMNO CON SWEETALERT2
    const botonesEliminar = document.querySelectorAll(".btn-eliminar-alumno");
    
    botonesEliminar.forEach(function (boton) {
        boton.addEventListener("click", function () {
            const id = this.dataset.id;
            const nombre = this.dataset.nombre;

            Swal.fire({
                title: "¿Eliminar estudiante?",
                text: `¿Está seguro de eliminar a ${nombre}? Esta acción no se puede deshacer.`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Sí, eliminar",
                cancelButtonText: "Cancelar",
                confirmButtonColor: "#dc3545",
                cancelButtonColor: "#6c757d",
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    const formulario = document.getElementById("formEliminarAlumno");
                    formulario.action = `/alumnos/eliminar/${id}`;
                    formulario.submit();
                }
            });
        });
    });
});