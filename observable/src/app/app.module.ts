import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListaEInterfaceComponent } from './componentes/lista-einterface/lista-einterface.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoWayComponent } from './componentes/two-way/two-way.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ListaEInterfaceComponent, TwoWayComponent],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
