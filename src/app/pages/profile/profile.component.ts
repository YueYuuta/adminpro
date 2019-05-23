import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from 'src/app/services/service.index';
import swal from 'sweetalert';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  usuario:Usuario;
  imagenSubir: File;
  imagenTemp:any;

  constructor(public _userService:UsuarioService) {
    this.usuario = this._userService.usuario;
   }

  ngOnInit() {
  }
guardar(usuario:Usuario){
  this.usuario.nombre = usuario.nombre;
  if ( !this.usuario.google ) {
    this.usuario.email = usuario.email;
  }

  this._userService.actualizarUsuario( this.usuario )
              .subscribe();

}

seleccionImage(archivo:File){
  if ( !archivo ) {
    this.imagenSubir = null;
    return;
  }

  if ( archivo.type.indexOf('image') < 0 ) {
    swal('Sólo imágenes', 'El archivo seleccionado no es una imagen', 'error');
    this.imagenSubir = null;
    return;
  }

  this.imagenSubir = archivo;

  let reader = new FileReader();
  let urlImagenTemp = reader.readAsDataURL( archivo );

  reader.onloadend = () => this.imagenTemp = reader.result;
}
cambiarImagen() {

  this._userService.cambiarImagen( this.imagenSubir, this.usuario._id );

}

}
