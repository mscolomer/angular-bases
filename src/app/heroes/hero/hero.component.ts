import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName() : string{
    return this.name.toUpperCase();
  }

  getHeroeDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero(): void{
    this.name = 'Spiderman'
  }

  changeAge(): void{
    this.age = 26
  }

  resetForm():void {
    this.name = 'Ironman';
    this.age = 45;

    //Cambiar elementos de HTML, en este ejemplo utilizamos el h1
    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>'
    // });
  }

}
