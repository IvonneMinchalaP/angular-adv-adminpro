import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo!:string;
  public tituloSubs$: Subscription; 

  constructor(private router : Router){
    this.tituloSubs$ = this.getArgumentosRuta()
                            .subscribe(({titulo}) =>{
                                this.titulo = titulo;
                                document.title = `adminPro - ${titulo}`;
                              });
    }
  ngOnDestroy(): void {

    this.tituloSubs$.unsubscribe();
  }

  getArgumentosRuta(){
    return this.router.events
    .pipe(
      filter<any>(event => event instanceof ActivationEnd),
      filter((event:ActivationEnd) => event.snapshot.firstChild === null ),
      map((event:ActivationEnd) => event.snapshot.data)


    )
    
  }
}
