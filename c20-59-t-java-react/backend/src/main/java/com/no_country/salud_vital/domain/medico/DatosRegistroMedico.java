package com.no_country.salud_vital.domain.medico;

import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import com.no_country.salud_vital.domain.direccion.DatosDireccion;

public record DatosRegistroMedico(

        @NotBlank
        String nombre,
        @NotBlank
        @Email
        String email,
        @NotBlank
        @Size(min = 0, max = 15)
        String telefono,
        @NotBlank
        @Pattern(regexp = "\\d{4,6}")
        String documento,
        @NotNull
        Especialidad especialidad,
        @NotNull
        @Valid
        DatosDireccion direccion) {
}
