<template>
  <nav>
    <router-link to="/showAll">Mostrar Todos</router-link>
    <router-link to="/showbyid">Mostrar Por ID</router-link>
    <router-link to="/save">Crear Nuevo Estudiante</router-link>
    <router-link to="/actualizar">Actualizar Estudiante</router-link>
    <router-link to="/actualizarParcialmente">Actualizar Parcialmente Estudiante</router-link>
    <router-link to="/eliminar">Eliminar Estudiante</router-link>
  </nav>
</template>

<style scoped>
/* Contenedor general del menú */
nav {
  display: flex;
  justify-content: center;
  gap: 18px;
  padding: 20px;
  background: linear-gradient(135deg, #2563eb, #1e40af);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
  flex-wrap: wrap;
}

/* Links */
a {
  text-decoration: none;
  padding: 10px 18px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  transition: all 0.25s ease;
}

/* Hover */
a:hover {
  background-color: #ffffff;
  color: #1e40af;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* Link activo (ruta actual) */
.router-link-active {
  background-color: #ffffff;
  color: #1e40af;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.18);
}

/* Responsive */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: center;
  }

  a {
    width: 100%;
    text-align: center;
  }
}
</style>