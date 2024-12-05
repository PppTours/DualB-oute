export class PartieDuCorps {
  nom: string;
  svg_id: string;
  title: string;
  description: string;
  image: string;

  constructor(nom: string, svg_id: string, title: string, description: string, image:string) {
    this.nom = nom;
    this.svg_id = svg_id;
    this.title = title;
    this.description = description;
    this.image = image;
  }
}
