const URL_usuario = import.meta.env.VITE_API_USUARIOS;
const URL_turno = import.meta.env.VITE_API_TURNOS;
const URL_paciente = import.meta.env.VITE_API_PACIENTES;
const URL_medico = import.meta.env.VITE_API_MEDICOS;
const URL_obrasocial = import.meta.env.VITE_API_OBRASOCIAL;


export const iniciarSesion = async (usuario) => {
  try {
    const respuesta = await fetch(URL_usuario, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(usuario),
    });

    if (respuesta.ok) {
      const usuarioAutenticado = await respuesta.json();
      return usuarioAutenticado;
    } else {
      throw new Error("Error de autenticación");
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const obtenerListaPacientes = async () => {
  try {
    const respuesta = await fetch(URL_paciente);
    const listaPacientes = await respuesta.json();
    return listaPacientes;
  } catch (error) {
    console.log(error);
  }
};
export const obtenerListaMedicos = async () => {
  try {
    const respuesta = await fetch(URL_medico);
    const listaMedicos = await respuesta.json();
    return listaMedicos;
  } catch (error) {
    console.log(error);
  }
};
export const obtenerListaObrasSociales = async () => {
  try {
    const respuesta = await fetch(URL_obrasocial);
    const listaObrasSociales = await respuesta.json();
    return listaObrasSociales;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerListaUsuarios = async () => {
  try {
    const respuesta = await fetch(URL_usuario);
    const listaUsuarios = await respuesta.json();
    return listaUsuarios;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerListaTurnos = async () => {
  try {
    const response = await fetch(URL_turno);
    const data = await response.json();

    const turnosFormateados = data.map((turno) => {
      return {
        ...turno,
        fecha: new Date(turno.fecha).toLocaleDateString("es-AR"),
      };
    });

    return turnosFormateados;
  } catch (error) {
    console.error("Error al obtener la lista de turnos:", error);
  }
};

export const crearPaciente = async (paciente) => {
  try {
    const respuesta = await fetch(URL_paciente, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(paciente),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
export const crearMedico = async (medico) => {
  try {
    const respuesta = await fetch(URL_medico, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(medico),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
export const crearObraSocial = async (obrasocial) => {
  try {
    const respuesta = await fetch(URL_obrasocial, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obrasocial),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const crearUsuario = async (usuario) => {
  try {
    const respuesta = await fetch(URL_usuario + "/nuevo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const crearTurno = async (nuevoTurno) => {
  nuevoTurno.fecha = new Date(nuevoTurno.fecha).toISOString();

  try {
    const response = await fetch(URL_turno, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"        
      },
      body: JSON.stringify(nuevoTurno),
    });
    return response;
  } catch (error) {
    console.error("Error al crear el turno:", error);
  }
};

// Solicitudes PUT

export const editarPaciente = async (paciente, id) => {
  try {
    const respuesta = await fetch(URL_paciente + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(paciente),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const editarMedico = async (medico, id) => {
  try {
    const respuesta = await fetch(URL_medico + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(medico),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const editarObraSocial = async (obrasocial, id) => {
  try {
    const respuesta = await fetch(URL_obrasocial + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obrasocial),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const editarUsuario = async (usuario, id) => {
  try {
    const respuesta = await fetch(URL_usuario + "/usuario/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const editarTurno = async (turno, id) => {
  console.log("entro a editar turno");
  try {
    const respuesta = await fetch(URL_turno + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(turno),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

// Solicitudes DELETE

export const borrarPaciente = async (id) => {
  try {
    const respuesta = await fetch(URL_paciente + "/" + id, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarMedico = async (id) => {
  try {
    const respuesta = await fetch(URL_medico + "/" + id, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarObraSocial = async (id) => {
  try {
    const respuesta = await fetch(URL_obrasocial + "/" + id, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarUsuario = async (id) => {
  try {
    const respuesta = await fetch(URL_usuario + "/usuario/" + id, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarTurno = async (id) => {
  try {
    const respuesta = await fetch(URL_turno + "/" + id, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

// Solicitudes GET por ID

export const obtenerPaciente = async (id) => {
  try {
    const respuesta = await fetch(URL_paciente + "/" + id);
    const paciente = await respuesta.json();
    return paciente;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerMedico = async (id) => {
  try {
    const respuesta = await fetch(URL_medico + "/" + id);
    const medico = await respuesta.json();
    return medico;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerObraSocial = async (id) => {
  try {
    const respuesta = await fetch(URL_obrasocial + "/" + id);
    const obrasocial = await respuesta.json();
    return obrasocial;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerTurno = async (id) => {
  try {
    const respuesta = await fetch(URL_turno + "/" + id);
    const turno = await respuesta.json();
    return turno;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerUsuario = async (id) => {
  try {
    const respuesta = await fetch(URL_usuario + "/usuario/" + id);
    const usuario = await respuesta.json();
    return usuario;
  } catch (error) {
    console.log(error);
  }
};
