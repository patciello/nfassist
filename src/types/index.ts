export interface CFOP {
  code: string;
  description: string;
  category: CFOPCategory;
  type: CFOPType;
  notes?: string;
  application?: string;
}

export type CFOPCategory =
  | 'ENTRADA'
  | 'SAIDA'
  | 'DENTRO_ESTADO'
  | 'FORA_ESTADO'
  | 'EXTERIOR';

export type CFOPType =
  | 'VENDA'
  | 'COMPRA'
  | 'TRANSFERENCIA'
  | 'DEVOLUCAO'
  | 'REMESSA'
  | 'RETORNO';

export interface SearchFilters {
  category?: CFOPCategory;
  type?: CFOPType;
  searchQuery?: string;
}