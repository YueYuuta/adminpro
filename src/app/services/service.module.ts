import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService, SidebarService , SharedService,SubirArchivoService, UsuarioService,LoginGuardGuard } from './service.index';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[SettingsService,
    SidebarService,
    SharedService,
    UsuarioService,
    LoginGuardGuard,
    LoginGuardGuard,
    SubirArchivoService
  ]
})
export class ServiceModule { }
