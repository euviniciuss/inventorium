import { Directive, Input, OnInit, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appFor]'
})

export class ForDirective implements OnInit {
  
  @Input('appForEm') lista: number[] = [];
  @Input('appForUsando') texto: string = '';

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit() :void {
    for (let cont of this.lista) {
      // Replica o componente da minha diretiva ao Inciar
      // O segundo parametro da função é o valor implicito, ou seja, o valor atribuido a minha variavel que é chamada na minha diretiva estrutural lá no HTML, nesse caso: n.
      this.container.createEmbeddedView(this.template, { $implicit : cont });
    }

    this.container.createEmbeddedView(this.template, { $implicit: this.texto });
  }
  
}
