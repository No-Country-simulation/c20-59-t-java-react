package com.no_country.salud_vital.domain.medico;

import jakarta.validation.constraints.NotNull;
import com.no_country.salud_vital.domain.direccion.DatosDireccion;

public record DatosActualizarMedico(@NotNull Long id, String nombre, String documento, DatosDireccion direccion) {
}
