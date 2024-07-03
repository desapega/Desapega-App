export interface Products {
    nome: string;
    descricao: string;
    imagemUrl: string;
    categoria: string;
    subcategoria: string;
    estado: string;
    municipio: string;
    status: string;
    condicao: string;
    favoritado: boolean;
    dataPostagem: Date;
    proprietarioId: number;
    mensagens: string;
}

export interface NewProducts {
    produtoId: number;
    nome: string;
    descricao: string;
    imagemUrl: string;
    categoria: string;
    subcategoria: string;
    estado: string;
    municipio: string;
    status: string;
    condicao: string;
    favoritado: boolean;
    dataPostagem: Date;
    proprietarioId: number;
    mensagens: string;
}
