
type Rating = {
    rate: number;
    count: number;
}

export type Cursos = {
    id: number;
    title: string;
    price: number;
    description: string;
    description_completa: string;
    image: string;
    rating: Rating;
}