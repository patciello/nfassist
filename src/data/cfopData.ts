import { CFOP } from '../types';

export const cfopData: CFOP[] = [
  {
    code: '1101',
    description: 'Compra para industrialização ou produção rural',
    category: 'ENTRADA',
    type: 'COMPRA',
    application: 'Compra de mercadoria a ser utilizada em processo de industrialização ou produção rural, bem como a entrada de mercadoria em estabelecimento industrial ou produtor rural de cooperativa recebida de seus cooperados ou de estabelecimento de outra cooperativa.\n\n(DECRETO Nº 28.868, DE 31/01/2006-– Efeitos a partir de 01/01/2006, ficando facultada ao contribuinte a sua adoção para fatos geradores ocorridos no período de 01 de novembro a 31 de dezembro de 2005)'
  },
  {
    code: '1102',
    description: 'Compra para comercialização',
    category: 'ENTRADA',
    type: 'COMPRA',
    application: 'Classificam-se neste código as compras de mercadorias a serem comercializadas. Também serão classificadas neste código as entradas de mercadorias em estabelecimento comercial de cooperativa recebidas de seus cooperados ou de estabelecimento de outra cooperativa.'
  },
  {
    code: '1111',
    description: 'Compra para industrialização de mercadoria recebida anteriormente em consignação industrial',
    category: 'ENTRADA',
    type: 'COMPRA',
    application: 'Classificam-se neste código as compras efetivas de mercadorias a serem utilizadas em processo de industrialização, recebidas anteriormente a título de consignação industrial.'
  },
  {
    code: '1113',
    description: 'Compra para comercialização, de mercadoria recebida anteriormente em consignação mercantil',
    category: 'ENTRADA',
    type: 'COMPRA',
    application: 'Classificam-se neste código as compras efetivas de mercadorias recebidas anteriormente a título de consignação mercantil.'
  },
  {
    code: '1116',
    description: 'Compra para industrialização ou produção rural originada de encomenda para recebimento futuro',
    category: 'ENTRADA',
    type: 'COMPRA',
    application: 'Classificam-se neste código as compras de mercadorias a serem utilizadas em processo de industrialização ou produção rural, quando da entrada real da mercadoria, cuja aquisição tenha sido classificada no código "1.922 - Lançamento efetuado a título de simples faturamento decorrente de compra para recebimento futuro".'
  },
  {
    code: '1117',
    description: 'Compra para comercialização originada de encomenda para recebimento futuro',
    category: 'ENTRADA',
    type: 'COMPRA',
    application: 'Classificam-se neste código as compras de mercadorias a serem comercializadas, quando da entrada real da mercadoria, cuja aquisição tenha sido classificada no código "1.922 - Lançamento efetuado a título de simples faturamento decorrente de compra para recebimento futuro".'
  },
  {
    code: '1118',
    description: 'Compra de mercadoria para comercialização pelo adquirente originário, entregue pelo vendedor remetente ao destinatário, em venda à ordem',
    category: 'ENTRADA',
    type: 'COMPRA',
    application: 'Classificam-se neste código as compras de mercadorias já comercializadas, que, sem transitar pelo estabelecimento do adquirente originário, sejam entregues pelo vendedor remetente diretamente ao estabelecimento destinatário, em operação de venda à ordem, cuja venda seja classificada, pelo adquirente originário, no código "5.120 - Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário pelo vendedor remetente, em venda à ordem".'
  },
  {
    code: '1120',
    description: 'Compra para industrialização, em venda à ordem, já recebida do vendedor remetente',
    category: 'ENTRADA',
    type: 'COMPRA',
    application: 'Classificam-se neste código as compras de mercadorias a serem utilizadas em processo de industrialização, em vendas à ordem, já recebidas do vendedor remetente, por ordem do adquirente originário.'
  },
  {
    code: '1121',
    description: 'Compra para comercialização, em venda à ordem, já recebida do vendedor remetente',
    category: 'ENTRADA',
    type: 'COMPRA',
    application: 'Classificam-se neste código as compras de mercadorias a serem comercializadas, em vendas à ordem, já recebidas do vendedor remetente por ordem do adquirente originário.'
  },
  {
    code: '1122',
    description: 'Compra para industrialização em que a mercadoria foi remetida pelo fornecedor ao industrializador sem transitar pelo estabelecimento adquirente',
    category: 'ENTRADA',
    type: 'COMPRA',
    application: 'Classificam-se neste código as compras de mercadorias a serem utilizadas em processo de industrialização, remetidas pelo fornecedor para o industrializador sem que a mercadoria tenha transitado pelo estabelecimento do adquirente.'
  },
  {
    code: '1124',
    description: 'Industrialização efetuada por outra empresa',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '1125',
    description: 'Industrialização efetuada por outra empresa quando a mercadoria remetida para utilização no processo de industrialização não transitou pelo estabelecimento adquirente da mercadoria',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '1126',
    description: 'Compras para utilização na prestação de serviços sujeitas ao ICMS',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '1128',
    description: 'Compras para utilização na prestação de serviços sujeitas ao ISSQN',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '1151',
    description: 'Transferência para industrialização ou produção rural',
    category: 'ENTRADA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '1152',
    description: 'Transferência para comercialização',
    category: 'ENTRADA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '1153',
    description: 'Transferência de energia elétrica para distribuição**',
    category: 'ENTRADA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '1154',
    description: 'Transferência para utilização na prestação de serviço',
    category: 'ENTRADA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '1201',
    description: 'Devolução de venda de produção do estabelecimento',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '1202',
    description: 'Devolução de venda de mercadoria adquirida ou recebida de terceiros',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '1203',
    description: 'Devolução de venda de produção do estabelecimento, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '1204',
    description: 'Devolução de venda de mercadoria adquirida ou recebida de terceiros, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '1205',
    description: 'Anulação de valor relativo à prestação de serviço de comunicação',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '1206',
    description: 'Anulação de valor relativo à prestação de serviço de transporte',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '1207',
    description: 'Anulação de valor relativo à venda de energia elétrica',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '1208',
    description: 'Devolução de produção do estabelecimento, remetida em transferência',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '1209',
    description: 'Devolução de mercadoria adquirida ou recebida de terceiros, remetida em transferência',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '1251',
    description: 'Compra de energia elétrica para distribuição ou comercialização',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '1252',
    description: 'Compra de energia elétrica por estabelecimento industrial',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '1253',
    description: 'Compra de energia elétrica por estabelecimento comercial',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '1254',
    description: 'Compra de energia elétrica por estabelecimento prestador de serviço de transporte',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '1255',
    description: 'Compra de energia elétrica por estabelecimento prestador de serviço de comunicação',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '1256',
    description: 'Compra de energia elétrica por estabelecimento de produtor rural',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '1257',
    description: 'Compra de energia elétrica para consumo por demanda contratada',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '1301',
    description: 'Aquisição de serviço de comunicação para execução de serviço da mesma natureza',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '1302',
    description: 'Aquisição de serviço de comunicação por estabelecimento industrial',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '1303',
    description: 'Aquisição de serviço de comunicação por estabelecimento comercial',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '1304',
    description: 'Aquisição de serviço de comunicação por estabelecimento de prestador de serviço de transporte',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '1305',
    description: 'Aquisição de serviço de comunicação por estabelecimento de geradora ou de distribuidora de energia elétrica',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '1306',
    description: 'Aquisição de serviço de comunicação por estabelecimento de produtor rural',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '1351',
    description: 'Aquisição de serviço de transporte para execução de serviço da mesma natureza',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '1352',
    description: 'Aquisição de serviço de transporte por estabelecimento industrial',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '1353',
    description: 'Aquisição de serviço de transporte por estabelecimento comercial',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '1354',
    description: 'Aquisição de serviço de transporte por estabelecimento de prestador de serviço de comunicação',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '1355',
    description: 'Aquisição de serviço de transporte por estabelecimento de geradora ou de distribuidora de energia elétrica',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '1356',
    description: 'Aquisição de serviço de transporte por estabelecimento de produtor rural',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '1360',
    description: 'Aquisição de serviço de transporte por contribuinte substituto em relação ao serviço de transporte',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '1401',
    description: 'Compra para industrialização ou produção rural em operação com mercadoria sujeita ao regime de substituição tributária',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '1403',
    description: 'Compra para comercialização em operação com mercadoria sujeita ao regime de substituição tributária',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '1406',
    description: 'Compra de bem para o ativo imobilizado cuja mercadoria está sujeita ao regime de substituição tributária',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '1407',
    description: 'Compra de mercadoria para uso ou consumo cuja mercadoria está sujeita ao regime de substituição tributária',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '1408',
    description: 'Transferência para industrialização ou produção rural em operação com mercadoria sujeita ao regime de substituição tributária',
    category: 'ENTRADA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '1409',
    description: 'Transferência para comercialização em operação com mercadoria sujeita ao regime de substituição tributária',
    category: 'ENTRADA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '1410',
    description: 'Devolução de venda de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO DE VENDA',
    application:
  },
  {
    code: '1411',
    description: 'Devolução de venda de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO DE VENDA',
    application:
  },
  {
    code: '1414',
    description: 'Retorno de produção do estabelecimento, remetida para venda fora do estabelecimento em operação com produto sujeito ao regime de substituição tributária',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '1415',
    description: 'Retorno de mercadoria adquirida ou recebida de terceiros, remetida para venda fora do estabelecimento em operação com mercadoria sujeita ao regime de substituição tributária',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '1451',
    description: 'Retorno de animal do estabelecimento produtor',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '1452',
    description: 'Retorno de insumo não utilizado na produção',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '1501',
    description: 'Entrada de mercadoria recebida com fim específico de exportação',
    category: 'ENTRADA',
    type: 'REMESSA COM FIM ESPECÍFICO DE EXPORTAÇÃO',
    application:
  },
  {
    code: '1503',
    description: 'Entrada decorrente de devolução de produto remetido com fim específico de exportação, de produção do estabelecimento',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '1504',
    description: 'Entrada decorrente de devolução de mercadoria remetida com fim específico de exportação, adquirida ou recebida de terceiros',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '1505',
    description: 'Entrada decorrente de devolução simbólica de mercadorias remetidas para formação de lote de exportação, de produtos industrializados ou produzidos pelo próprio estabelecimento',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '1506',
    description: 'Entrada decorrente de devolução simbólica de mercadorias, adquiridas ou recebidas de terceiros, remetidas para formação de lote de exportação',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '1551',
    description: 'Compra de bem para o ativo imobilizado',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '1552',
    description: 'Transferência de bem do ativo imobilizado',
    category: 'ENTRADA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '1553',
    description: 'Devolução de venda de bem do ativo imobilizado',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO DE VENDA',
    application:
  },
  {
    code: '1554',
    description: 'Retorno de bem do ativo imobilizado remetido para uso fora do estabelecimento',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '1555',
    description: 'Entrada de bem do ativo imobilizado de terceiro, remetido para uso no estabelecimento',
    category: 'ENTRADA',
    type: 'ENTRADA',
    application:
  },
  {
    code: '1556',
    description: 'Compra de material para uso ou consumo',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '1557',
    description: 'Transferência de material para uso ou consumo',
    category: 'ENTRADA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '1601',
    description: 'Recebimento, por transferência, de crédito de ICMS',
    category: 'ENTRADA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '1602',
    description: 'Recebimento, por transferência, de saldo credor de ICMS de outro estabelecimento da mesma empresa, para compensação de saldo devedor de ICMS',
    category: 'ENTRADA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '1603',
    description: 'Ressarcimento de ICMS retido por substituição tributária',
    category: 'ENTRADA',
    type: 'Ressarcimento',
    application:
  },
  {
    code: '1604',
    description: 'Lançamento do crédito relativo à compra de bem para o ativo imobilizado',
    category: 'ENTRADA',
    type: 'Lançamento',
    application:
  },
  {
    code: '1605',
    description: 'Recebimento, por transferência, de saldo devedor de ICMS de outro estabelecimento da mesma empresa',
    category: 'ENTRADA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '1652',
    description: 'Compra de combustível ou lubrificante para comercialização',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '1653',
    description: 'Compra de combustível ou lubrificante por consumidor ou usuário final',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '1658',
    description: 'Transferência de combustível e lubrificante para industrialização',
    category: 'ENTRADA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '1659',
    description: 'Transferência de combustível e lubrificante para comercialização',
    category: 'ENTRADA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '1660',
    description: 'Devolução de venda de combustível ou lubrificante destinado à industrialização subseqüente',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO DE VENDA',
    application:
  },
  {
    code: '1661',
    description: 'Devolução de venda de combustível ou lubrificante destinado à comercialização',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO DE VENDA',
    application:
  },
  {
    code: '1662',
    description: 'Devolução de venda de combustível ou lubrificante destinado a consumidor ou usuário final',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO DE VENDA',
    application:
  },
  {
    code: '1663',
    description: 'Entrada de combustível ou lubrificante para armazenagem',
    category: 'ENTRADA',
    type: 'ENTRADA',
    application:
  },
  {
    code: '1664',
    description: 'Retorno de combustível ou lubrificante remetido para armazenagem',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '1901',
    description: 'Entrada para industrialização por encomenda',
    category: 'ENTRADA',
    type: 'ENTRADA',
    application:
  },
  {
    code: '1902',
    description: 'Retorno de mercadoria remetida para industrialização por encomenda',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '1903',
    description: 'Entrada de mercadoria remetida para industrialização e não aplicada no referido processo',
    category: 'ENTRADA',
    type: 'ENTRADA',
    application:
  },
  {
    code: '1904',
    description: 'Retorno de remessa para venda fora do estabelecimento',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '1905',
    description: 'Entrada de mercadoria recebida para depósito em depósito fechado ou armazém geral',
    category: 'ENTRADA',
    type: 'ENTRADA',
    application:
  },
  {
    code: '1906',
    description: 'Retorno de mercadoria remetida para depósito fechado ou armazém geral',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '1907',
    description: 'Retorno simbólico de mercadoria remetida para depósito fechado ou armazém geral',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '1908',
    description: 'Entrada de bem por conta de contrato de comodato',
    category: 'ENTRADA',
    type: 'ENTRADA',
    application:
  },
  {
    code: '1909',
    description: 'Retorno de bem remetido por conta de contrato de comodato',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '1910',
    description: 'Entrada de bonificação, doação ou brinde',
    category: 'ENTRADA',
    type: 'ENTRADA',
    application:
  },
  {
    code: '1911',
    description: 'Entrada de amostra grátis',
    category: 'ENTRADA',
    type: 'ENTRADA',
    application:
  },
  {
    code: '1912',
    description: 'Entrada de mercadoria ou bem recebido para demonstração',
    category: 'ENTRADA',
    type: 'ENTRADA',
    application:
  },
  {
    code: '1913',
    description: 'Retorno de mercadoria ou bem remetido para demonstração',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '1914',
    description: 'Retorno de mercadoria ou bem remetido para exposição ou feira',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '1915',
    description: 'Entrada de mercadoria ou bem recebido para conserto ou reparo',
    category: 'ENTRADA',
    type: 'ENTRADA',
    application:
  },
  {
    code: '1916',
    description: 'Retorno de mercadoria ou bem remetido para conserto ou reparo',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '1917',
    description: 'Entrada de mercadoria recebida em consignação mercantil ou industrial',
    category: 'ENTRADA',
    type: 'ENTRADA',
    application:
  },
  {
    code: '1918',
    description: 'Devolução de mercadoria remetida em consignação mercantil ou industrial',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '1919',
    description: 'Devolução simbólica de mercadoria vendida ou utilizada em processo industrial, remetida anteriormente em consignação mercantil ou industrial',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '1920',
    description: 'Entrada de vasilhame ou sacaria',
    category: 'ENTRADA',
    type: 'ENTRADA',
    application:
  },
  {
    code: '1921',
    description: 'Retorno de vasilhame ou sacaria',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '1922',
    description: 'Lançamento efetuado a título de simples faturamento decorrente de compra para recebimento futuro',
    category: 'ENTRADA',
    type: 'Lançamento',
    application:
  },
  {
    code: '1923',
    description: 'Entrada de mercadoria recebida do vendedor remetente, em venda à ordem',
    category: 'ENTRADA',
    type: 'ENTRADA',
    application:
  },
  {
    code: '1924',
    description: 'Entrada para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente',
    category: 'ENTRADA',
    type: 'ENTRADA',
    application:
  },
  {
    code: '1925',
    description: 'Retorno de mercadoria remetida para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '1926',
    description: 'Lançamento efetuado a título de reclassificação de mercadoria decorrente de formação de kit ou de sua desagregação',
    category: 'ENTRADA',
    type: 'Lançamento',
    application:
  },
  {
    code: '1931',
    description: 'Lançamento efetuado pelo tomador do serviço de transporte quando a responsabilidade de retenção do imposto for atribuída ao remetente ou alienante da mercadoria, pelo serviço de transporte realizado por transportador autônomo ou por transportador não inscrito na unidade da Federação onde iniciado o serviço',
    category: 'ENTRADA',
    type: 'Lançamento',
    application:
  },
  {
    code: '1932',
    description: 'Aquisição de serviço de transporte iniciado em unidade da Federação diversa daquela onde inscrito o prestador',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '1933',
    description: 'Aquisição de serviço tributado pelo ISSQN',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '1949',
    description: 'Outra entrada de mercadoria ou prestação de serviço não especificada',
    category: 'ENTRADA',
    type: 'OUTRA ENTRADA',
    application:
  },
  {
    code: '2101',
    description: 'Compra para industrialização ou produção rural',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '2102',
    description: 'Compra para comercialização',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '2111',
    description: 'Compra para industrialização de mercadoria recebida anteriormente em consignação industrial',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:

  },
  {
    code: '2113',
    description: 'Compra para comercialização, de mercadoria recebida anteriormente em consignação mercantil',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '2116',
    description: 'Compra para industrialização ou produção rural originada de encomenda para recebimento futuro',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '2117',
    description: 'Compra para comercialização originada de encomenda para recebimento futuro',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '2118',
    description: 'Compra de mercadoria para comercialização pelo adquirente originário, entregue pelo vendedor remetente ao destinatário, em venda à ordem',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '2120',
    description: 'Compra para industrialização, em venda à ordem, já recebida do vendedor remetente',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '2121',
    description: 'Compra para comercialização, em venda à ordem, já recebida do vendedor remetente',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '2122',
    description: 'Compra para industrialização em que a mercadoria foi remetida pelo fornecedor ao industrializador sem transitar pelo estabelecimento adquirente',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '2124',
    description: 'Industrialização efetuada por outra empresa',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '2125',
    description: 'Industrialização efetuada por outra empresa quando a mercadoria remetida para utilização no processo de industrialização não transitou pelo estabelecimento adquirente da mercadoria',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '2126',
    description: 'Compra para utilização na prestação de serviço',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '2151',
    description: 'Transferência para industrialização ou produção rural',
    category: 'ENTRADA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '2152',
    description: 'Transferência para comercialização',
    category: 'ENTRADA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '2153',
    description: 'Transferência de energia elétrica para distribuição',
    category: 'ENTRADA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '2154',
    description: 'Transferência para utilização na prestação de serviço',
    category: 'ENTRADA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '2201',
    description: 'Devolução de venda de produção do estabelecimento',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO DE VENDA',
    application:
  },
  {
    code: '2202',
    description: 'Devolução de venda de mercadoria adquirida ou recebida de terceiros',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO DE VENDA',
    application:
  },
  {
    code: '2203',
    description: 'Devolução de venda de produção do estabelecimento, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO DE VENDA',
    application:
  },
  {
    code: '2204',
    description: 'Devolução de venda de mercadoria adquirida ou recebida de terceiros, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO DE VENDA',
    application:
  },
  {
    code: '2205',
    description: 'Anulação de valor relativo à prestação de serviço de comunicação',
    category: 'ENTRADA',
    type: 'ANULAÇÃO DE VALOR',
    application:
  },
  {
    code: '2206',
    description: 'Anulação de valor relativo à prestação de serviço de transporte**',
    category: 'ENTRADA',
    type: 'ANULAÇÃO DE VALOR',
    application:
  },
  {
    code: '2207',
    description: 'Anulação de valor relativo à venda de energia elétrica',
    category: 'ENTRADA',
    type: 'ANULAÇÃO DE VALOR',
    application:
  },
  {
    code: '2208',
    description: 'Devolução de produção do estabelecimento, remetida em transferência',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '2209',
    description: 'Devolução de mercadoria adquirida ou recebida de terceiros, remetida em transferência',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '2251',
    description: 'Compra de energia elétrica para distribuição ou comercialização',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '2252',
    description: 'Compra de energia elétrica por estabelecimento industrial',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '2253',
    description: 'Compra de energia elétrica por estabelecimento comercial**',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '2253',
    description: 'Compra de energia elétrica por estabelecimento comercial',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
},
  {
    code: '2254',
    description: 'Compra de energia elétrica por estabelecimento prestador de serviço de transporte',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '2255',
    description: 'Compra de energia elétrica por estabelecimento prestador de serviço de comunicação',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '2256',
    description: 'Compra de energia elétrica por estabelecimento de produtor rural',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '2257',
    description: 'Compra de energia elétrica para consumo por demanda contratada',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '2300',
    description: 'AQUISIÇÕES DE SERVIÇOS DE COMUNICAÇÃO',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO',
    application:
  },
  {
    code: '2301',
    description: 'Aquisição de serviço de comunicação para execução de serviço da mesma natureza',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO',
    application:
  },
  {
    code: '2302',
    description: 'Aquisição de serviço de comunicação por estabelecimento industrial',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO',
    application:
  },
  {
    code: '2303',
    description: 'Aquisição de serviço de comunicação por estabelecimento comercial',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO',
    application:
  },
  {
    code: '2304',
    description: 'Aquisição de serviço de comunicação por estabelecimento de prestador de serviço de transporte',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO',
    application:
  },
  {
    code: '2305',
    description: 'Aquisição de serviço de comunicação por estabelecimento de geradora ou de distribuidora de energia elétrica',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO',
    application:
  },
  {
    code: '2306',
    description: 'Aquisição de serviço de comunicação por estabelecimento de produtor rural',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO',
    application:
  },
  {
    code: '2351',
    description: 'Aquisição de serviço de transporte para execução de serviço da mesma natureza',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO',
    application:
  },
  {
    code: '2352',
    description: 'Aquisição de serviço de transporte por estabelecimento industrial',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO',
    application:
  },
  {
    code: '2353',
    description: 'Aquisição de serviço de transporte por estabelecimento comercial',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO',
    application:
  },
  {
    code: '2354',
    description: 'Aquisição de serviço de transporte por estabelecimento de prestador de serviço de comunicação',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO',
    application:
  },
  {
    code: '2355',
    description: 'Aquisição de serviço de transporte por estabelecimento de geradora ou de distribuidora de energia elétrica',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO',
    application:
  },
  {
    code: '2356',
    description: 'Aquisição de serviço de transporte por estabelecimento de produtor rural',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO',
    application:
  },
  {
    code: '2400',
    description: 'ENTRADAS DE MERCADORIAS SUJEITAS AO REGIME DE SUBSTITUIÇÃO TRIBUTÁRIA',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '2401',
    description: 'Compra para industrialização ou produção rural em operação com mercadoria sujeita ao regime de substituição tributária',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '2403',
    description: 'Compra para comercialização em operação com mercadoria sujeita ao regime de substituição tributária',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '2406',
    description: 'Compra de bem para o ativo imobilizado cuja mercadoria está sujeita ao regime de substituição tributária',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '2407',
    description: 'Compra de mercadoria para uso ou consumo cuja mercadoria está sujeita ao regime de substituição tributária',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '2408',
    description: 'Transferência para industrialização ou produção rural em operação com mercadoria sujeita ao regime de substituição tributária',
    category: 'ENTRADA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '2409',
    description: 'Transferência para comercialização em operação com mercadoria sujeita ao regime de substituição tributária',
    category: 'ENTRADA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '2410',
    description: 'Devolução de venda de produção do estabelecimento em operação com produto sujeito ao regime de',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '2411',
    description: 'Devolução de venda de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '2414',
    description: 'Retorno de produção do estabelecimento, remetida para venda fora do estabelecimento em operação com produto sujeito ao regime de substituição tributária',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '2415',
    description: 'Retorno de mercadoria adquirida ou recebida de terceiros, remetida para venda fora do estabelecimento em operação com mercadoria sujeita ao regime de substituição tributária',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '2500',
    description: 'ENTRADAS DE MERCADORIAS REMETIDAS COM FIM ESPECÍFICO DE EXPORTAÇÃO E EVENTUAIS DEVOLUÇÕES',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '2501',
    description: 'Entrada de mercadoria recebida com fim específico de exportação',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '2503',
    description: 'Entrada decorrente de devolução de produto remetido com fim específico de exportação, de produção do estabelecimento',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '2504',
    description: 'Entrada decorrente de devolução de mercadoria remetida com fim específico de exportação, adquirida ou recebida de terceiros',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '2505',
    description: 'Entrada decorrente de devolução simbólica de mercadorias remetidas para formação de lote de exportação, de produtos industrializados ou produzidos pelo próprio estabelecimento',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '2506',
    description: 'Entrada decorrente de devolução simbólica de mercadorias, adquiridas ou recebidas de terceiros, remetidas para formação de lote de exportação',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '2550',
    description: 'OPERAÇÕES COM BENS DE ATIVO IMOBILIZADO E MATERIAIS PARA USO OU CONSUMO',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '2551',
    description: 'Compra de bem para o ativo imobilizado',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '2552',
    description: 'Transferência de bem do ativo imobilizado',
    category: 'ENTRADA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '2553',
    description: 'Devolução de venda de bem do ativo imobilizado',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '2554',
    description: 'Retorno de bem do ativo imobilizado remetido para uso fora do estabelecimento',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '2555',
    description: 'Entrada de bem do ativo imobilizado de terceiro, remetido para uso no estabelecimento',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '2556',
    description: 'Compra de material para uso ou consumo',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '2557',
    description: 'Transferência de material para uso ou consumo',
    category: 'ENTRADA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '2600',
    description: 'CRÉDITOS E RESSARCIMENTOS DE ICMS',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '2603',
    description: 'Ressarcimento de ICMS retido por substituição tributária',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '2651',
    description: 'Compra de combustível ou lubrificante para industrialização subseqüente',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '2652',
    description: 'Compra de combustível ou lubrificante para comercialização',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '2653',
    description: 'Compra de combustível ou lubrificante por consumidor ou usuário final',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '2658',
    description: 'Transferência de combustível e lubrificante para industrialização',
    category: 'ENTRADA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '2659',
    description: 'Transferência de combustível e lubrificante para comercialização',
    category: 'ENTRADA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '2660',
    description: 'Devolução de venda de combustível ou lubrificante destinado à industrialização subseqüente',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '2661',
    description: 'Devolução de venda de combustível ou lubrificante destinado à comercialização',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '2662',
    description: 'Devolução de venda de combustível ou lubrificante destinado a consumidor ou usuário final',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '2663',
    description: 'Entrada de combustível ou lubrificante para armazenagem',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '2664',
    description: 'Retorno de combustível ou lubrificante remetido para armazenagem',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '2900',
    description: 'OUTRAS ENTRADAS DE MERCADORIAS OU AQUISIÇÕES DE SERVIÇOS',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '2901',
    description: 'Entrada para industrialização por encomenda',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '2902',
    description: 'Retorno de mercadoria remetida para industrialização por encomenda',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '2903',
    description: 'Entrada de mercadoria remetida para industrialização e não aplicada no referido processo',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '2904',
    description: 'Retorno de remessa para venda fora do estabelecimento',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '2905',
    description: 'Entrada de mercadoria recebida para depósito em depósito fechado ou armazém geral',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '2906',
    description: 'Retorno de mercadoria remetida para depósito fechado ou armazém geral',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '2907',
    description: 'Retorno simbólico de mercadoria remetida para depósito fechado ou armazém geral',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '2908',
    description: 'Entrada de bem por conta de contrato de comodato',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '2909',
    description: 'Retorno de bem remetido por conta de contrato de comodato',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '2910',
    description: 'Entrada de bonificação, doação ou brinde',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '2911',
    description: 'Entrada de amostra grátis',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '2912',
    description: 'Entrada de mercadoria ou bem recebido para demonstração',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '2913',
    description: 'Retorno de mercadoria ou bem remetido para demonstração',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '2914',
    description: 'Retorno de mercadoria ou bem remetido para exposição ou feira',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '2915',
    description: 'Entrada de mercadoria ou bem recebido para conserto ou reparo',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '2916',
    description: 'Retorno de mercadoria ou bem remetido para conserto ou reparo',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '2917',
    description: 'Entrada de mercadoria recebida em consignação mercantil ou industrial',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '2918',
    description: 'Devolução de mercadoria remetida em consignação mercantil ou industrial',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '2919',
    description: 'Devolução simbólica de mercadoria vendida ou utilizada em processo industrial, remetida anteriormente',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '2920',
    description: 'Entrada de vasilhame ou sacaria',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '2921',
    description: 'Retorno de vasilhame ou sacaria',
    category: 'ENTRADA',
    type: 'RETORNO',
    notes: null,
    application:
  },
  {
    code: '2922',
    description: 'Lançamento efetuado a título de simples faturamento decorrente de compra para recebimento futuro',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '2923',
    description: 'Entrada de mercadoria recebida do vendedor remetente, em venda à ordem',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '2924',
    description: 'Entrada para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '2925',
    description: 'Retorno de mercadoria remetida para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente',
    category: 'ENTRADA',
    type: 'RETORNO',
    application:
  },
  {
    code: '2931',
    description: 'Lançamento efetuado pelo tomador do serviço de transporte quando a responsabilidade de retenção do imposto for atribuída ao remetente ou alienante da mercadoria, pelo serviço de transporte realizado por transportador autônomo ou por transportador não inscrito na unidade da Federação onde iniciado o serviço',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '2932',
    description: 'Aquisição de serviço de transporte iniciado em unidade da Federação diversa daquela onde inscrito o prestador',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO',
    application:
  },
  {
    code: '2933',
    description: 'Aquisição de serviço tributado pelo ISSQN',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO',
    application:
  },
  {
    code: '2949',
    description: 'Outra entrada de mercadoria ou prestação de serviço não especificada',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '3000',
    description: 'ENTRADAS OU AQUISIÇÕES DE SERVIÇOS DO EXTERIOR',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '3100',
    description: 'COMPRAS PARA INDUSTRIALIZAÇÃO, COMERCIALIZAÇÃO OU PRESTAÇÃO DE SERVIÇOS',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '3101',
    description: 'Compra para industrialização ou produção rural',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '3102',
    description: 'Compra para comercialização',
    category: 'ENTRADA',
    type: 'COMPRA',

  },
  {
    code: '3126',
    description: 'Compra para utilização na prestação de serviço',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '3127',
    description: 'Compra para industrialização sob o regime de "drawback"',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '3200',
    description: 'DEVOLUÇÕES DE VENDAS DE PRODUÇÃO PRÓPRIA, DE TERCEIROS OU ANULAÇÕES DE VALORES',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '3201',
    description: 'Devolução de venda de produção do estabelecimento',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '3202',
    description: 'Devolução de venda de mercadoria adquirida ou recebida de terceiros',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '3205',
    description: 'Anulação de valor relativo à prestação de serviço de comunicação',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '3206',
    description: 'Anulação de valor relativo à prestação de serviço de transporte',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '3207',
    description: 'Anulação de valor relativo à venda de energia elétrica',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '3211',
    description: 'Devolução de venda de produção do estabelecimento sob o regime de "drawback"',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '3250',
    description: 'COMPRAS DE ENERGIA ELÉTRICA',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '3251',
    description: 'Compra de energia elétrica para distribuição ou comercialização',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '3300',
    description: 'AQUISIÇÕES DE SERVIÇOS DE COMUNICAÇÃO',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO',
    application:
  },
  {
    code: '3301',
    description: 'Aquisição de serviço de comunicação para execução de serviço da mesma natureza',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO',
    application:
  },
  {
    code: '3350',
    description: 'AQUISIÇÕES DE SERVIÇOS DE TRANSPORTE',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO',
    application:
  },
  {
    code: '3351',
    description: 'Aquisição de serviço de transporte para execução de serviço da mesma natureza',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO',
    application:
  },
  {
    code: '3352',
    description: 'Aquisição de serviço de transporte por estabelecimento industrial',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO',
    application:
  },
  {
    code: '3353',
    description: 'Aquisição de serviço de transporte por estabelecimento comercial',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO',
    application:
  },
  {
    code: '3354',
    description: 'Aquisição de serviço de transporte por estabelecimento de prestador de serviço de comunicação',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO',
    application:
  },
  {
    code: '3355',
    description: 'Aquisição de serviço de transporte por estabelecimento de geradora ou de distribuidora de energia elétrica',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO',
    application:
  },
  {
    code: '3356',
    description: 'Aquisição de serviço de transporte por estabelecimento de produtor rural',
    category: 'ENTRADA',
    type: 'AQUISIÇÃO',
    application:
  },
  {
    code: '3500',
    description: 'ENTRADAS DE MERCADORIAS REMETIDAS COM FIM ESPECÍFICO DE EXPORTAÇÃO E EVENTUAIS DEVOLUÇÕES',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '3503',
    description: 'Devolução de mercadoria exportada que tenha sido recebida com fim específico de exportação',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '3550',
    description: 'OPERAÇÕES COM BENS DE ATIVO IMOBILIZADO E MATERIAIS PARA USO OU CONSUMO',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '3551',
    description: 'Compra de bem para o ativo imobilizado',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '3553',
    description: 'Devolução de venda de bem do ativo imobilizado',
    category: 'ENTRADA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '3556',
    description: 'Compra de material para uso ou consumo',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '3651',
    description: 'Compra de combustível ou lubrificante para industrialização subseqüente',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '3652',
    description: 'Compra de combustível ou lubrificante para comercialização',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '3653',
    description: 'Compra de combustível ou lubrificante por consumidor ou usuário final',
    category: 'ENTRADA',
    type: 'COMPRA',
    application:
  },
  {
    code: '3900',
    description: 'OUTRAS ENTRADAS DE MERCADORIAS OU AQUISIÇÕES DE SERVIÇOS',
    category: 'ENTRADA',
    type: null,
    application:
  },
  
  {
    code: '3930',
    description: 'Lançamento efetuado a título de entrada de bem sob amparo de regime especial aduaneiro de admissão temporária',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '3949',
    description: 'Outra entrada de mercadoria ou prestação de serviço não especificada',
    category: 'ENTRADA',
    type: null,
    application:
  },
  {
    code: '5000',
    description: 'SAÍDAS OU PRESTAÇÕES DE SERVIÇOS PARA O ESTADO',
    category: 'SAÍDA',
    type: null,
    application:
  },
  {
    code: '5100',
    description: 'VENDAS DE PRODUÇÃO PRÓPRIA OU DE TERCEIROS',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5101',
    description: 'Venda de produção do estabelecimento',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5102',
    description: 'Venda de mercadoria adquirida ou recebida de terceiros',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5103',
    description: 'Venda de produção do estabelecimento, efetuada fora do estabelecimento',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5104',
    description: 'Venda de mercadoria adquirida ou recebida de terceiros, efetuada fora do estabelecimento',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5105',
    description: 'Venda de produção do estabelecimento que não deva por ele transitar',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5106',
    description: 'Venda de mercadoria adquirida ou recebida de terceiros, que não deva por ele transitar',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5109',
    description: 'Venda de produção do estabelecimento, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5110',
    description: 'Venda de mercadoria adquirida ou recebida de terceiros, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5111',
    description: 'Venda de produção do estabelecimento remetida anteriormente em consignação industrial',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5112',
    description: 'Venda de mercadoria adquirida ou recebida de terceiros remetida anteriormente em consignação industrial',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5113',
    description: 'Venda de produção do estabelecimento remetida anteriormente em consignação mercantil',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5114',
    description: 'Venda de mercadoria adquirida ou recebida de terceiros remetida anteriormente em consignação mercantil',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5115',
    description: 'Venda de mercadoria adquirida ou recebida de terceiros, recebida anteriormente em consignação mercantil',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5116',
    description: 'Venda de produção do estabelecimento originada de encomenda para entrega futura',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5117',
    description: 'Venda de mercadoria adquirida ou recebida de terceiros, originada de encomenda para entrega futura',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5118',
    description: 'Venda de produção do estabelecimento entregue ao destinatário por conta e ordem do adquirente originário, em venda à ordem',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5119',
    description: 'Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário por conta e ordem do adquirente originário, em venda à ordem',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5120',
    description: 'Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário pelo vendedor remetente, em venda à ordem',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5122',
    description: 'Venda de produção do estabelecimento remetida para industrialização, por conta e ordem do adquirente, sem transitar pelo estabelecimento do adquirente',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5123',
    description: 'Venda de mercadoria adquirida ou recebida de terceiros remetida para industrialização, por conta e ordem do adquirente, sem transitar pelo estabelecimento do adquirente',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5124',
    description: 'Industrialização efetuada para outra empresa',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5125',
    description: 'Industrialização efetuada para outra empresa quando a mercadoria recebida para utilização no processo de industrialização não transitar pelo estabelecimento adquirente da mercadoria',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5150',
    description: 'TRANSFERÊNCIAS DE PRODUÇÃO PRÓPRIA OU DE TERCEIROS',
    category: 'SAÍDA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '5151',
    description: 'Transferência de produção do estabelecimento',
    category: 'SAÍDA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '5152',
    description: 'Transferência de mercadoria adquirida ou recebida de terceiros',
    category: 'SAÍDA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '5153',
    description: 'Transferência de energia elétrica',
    category: 'SAÍDA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '5155',
    description: 'Transferência de produção do estabelecimento, que não deva por ele transitar',
    category: 'SAÍDA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '5156',
    description: 'Transferência de mercadoria adquirida ou recebida de terceiros, que não deva por ele transitar',
    category: 'SAÍDA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '5200',
    description: 'DEVOLUÇÕES DE COMPRAS PARA INDUSTRIALIZAÇÃO, COMERCIALIZAÇÃO OU ANULAÇÕES DE VALORES',
    category: 'SAÍDA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '5200',
    description: 'DEVOLUÇÕES DE COMPRAS PARA INDUSTRIALIZAÇÃO, COMERCIALIZAÇÃO OU ANULAÇÕES DE VALORES',
    category: 'SAÍDA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '5201',
    description: 'Devolução de compra para industrialização ou produção rural',
    category: 'SAÍDA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '5202',
    description: 'Devolução de compra para comercialização',
    category: 'SAÍDA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '5205',
    description: 'Anulação de valor relativo a aquisição de serviço de comunicação',
    category: 'SAÍDA',
    type: 'ANULAÇÃO',
    application:
  },
  {
    code: '5206',
    description: 'Anulação de valor relativo a aquisição de serviço de transporte',
    category: 'SAÍDA',
    type: 'ANULAÇÃO',
    application:
  },
  {
    code: '5207',
    description: 'Anulação de valor relativo à compra de energia elétrica',
    category: 'SAÍDA',
    type: 'ANULAÇÃO',
    application:
  },
  {
    code: '5208',
    description: 'Devolução de mercadoria recebida em transferência para industrialização ou produção rural',
    category: 'SAÍDA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '5209',
    description: 'Devolução de mercadoria recebida em transferência para comercialização',
    category: 'SAÍDA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '5210',
    description: 'Devolução de compra para utilização na prestação de serviço sujeitas ao ICMS ou ISSQN',
    category: 'SAÍDA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '5250',
    description: 'VENDAS DE ENERGIA ELÉTRICA',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5251',
    description: 'Venda de energia elétrica para distribuição ou comercialização',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5252',
    description: 'Venda de energia elétrica para estabelecimento industrial',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5253',
    description: 'Venda de energia elétrica para estabelecimento comercial',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5254',
    description: 'Venda de energia elétrica para estabelecimento prestador de serviço de transporte',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5255',
    description: 'Venda de energia elétrica para estabelecimento prestador de serviço de comunicação',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5256',
    description: 'Venda de energia elétrica para estabelecimento de produtor rural',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5257',
    description: 'Venda de energia elétrica para consumo por demanda contratada',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5258',
    description: 'Venda de energia elétrica a não contribuinte',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5300',
    description: 'PRESTAÇÕES DE SERVIÇOS DE COMUNICAÇÃO',
    category: 'SAÍDA',
    type: 'PRESTAÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '5301',
    description: 'Prestação de serviço de comunicação para execução de serviço da mesma natureza',
    category: 'SAÍDA',
    type: 'PRESTAÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '5302',
    description: 'Prestação de serviço de comunicação a estabelecimento industrial',
    category: 'SAÍDA',
    type: 'PRESTAÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '5303',
    description: 'Prestação de serviço de comunicação a estabelecimento comercial',
    category: 'SAÍDA',
    type: 'PRESTAÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '5304',
    description: 'Prestação de serviço de comunicação a estabelecimento de prestador de serviço de transporte',
    category: 'SAÍDA',
    type: 'PRESTAÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '5305',
    description: 'Prestação de serviço de comunicação a estabelecimento de geradora ou de distribuidora de energia elétrica',
    category: 'SAÍDA',
    type: 'PRESTAÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '5306',
    description: 'Prestação de serviço de comunicação a estabelecimento de produtor rural',
    category: 'SAÍDA',
    type: 'PRESTAÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '5307',
    description: 'Prestação de serviço de comunicação a não contribuinte',
    category: 'SAÍDA',
    type: 'PRESTAÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '5350',
    description: 'PRESTAÇÕES DE SERVIÇOS DE TRANSPORTE',
    category: 'SAÍDA',
    type: 'PRESTAÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '5351',
    description: 'Prestação de serviço de transporte para execução de serviço da mesma natureza',
    category: 'SAÍDA',
    type: 'PRESTAÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '5352',
    description: 'Prestação de serviço de transporte a estabelecimento industrial',
    category: 'SAÍDA',
    type: 'PRESTAÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '5353',
    description: 'Prestação de serviço de transporte a estabelecimento comercial',
    category: 'SAÍDA',
    type: 'PRESTAÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '5354',
    description: 'Prestação de serviço de transporte a estabelecimento de prestador de serviço de comunicação',
    category: 'SAÍDA',
    type: 'PRESTAÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '5355',
    description: 'Prestação de serviço de transporte a estabelecimento de geradora ou de distribuidora de energia elétrica',
    category: 'SAÍDA',
    type: 'PRESTAÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '5356',
    description: 'Prestação de serviço de transporte a estabelecimento de produtor rural',
    category: 'SAÍDA',
    type: 'PRESTAÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '5357',
    description: 'Prestação de serviço de transporte a não contribuinte',
    category: 'SAÍDA',
    type: 'PRESTAÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '5359',
    description: 'Prestação de serviço de transporte a contribuinte ou a não contribuinte quando a mercadoria transportada está dispensada de emissão de nota fiscal',
    category: 'SAÍDA',
    type: 'PRESTAÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '5360',
    description: 'Prestação de serviço de transporte a contribuinte substituto em relação ao serviço de transporte',
    category: 'SAÍDA',
    type: 'PRESTAÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '5400',
    description: 'SAÍDAS DE MERCADORIAS SUJEITAS AO REGIME DE SUBSTITUIÇÃO TRIBUTÁRIA',
    category: 'SAÍDA',
    type: 'SAÍDA DE MERCADORIA',
    application:
  },
  {
    code: '5401',
    description: 'Venda de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária, na condição de contribuinte substituto',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5402',
    description: 'Venda de produção do estabelecimento de produto sujeito ao regime de substituição tributária, em operação entre contribuintes substitutos do mesmo produto',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5403',
    description: 'Venda de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária, na condição de contribuinte substituto',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5405',
    description: 'Venda de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária, na condição de contribuinte substituído',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5408',
    description: 'Transferência de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária',
    category: 'SAÍDA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '5409',
    description: 'Transferência de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária',
    category: 'SAÍDA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '5410',
    description: 'Devolução de compra para industrialização ou produção rural em operação com mercadoria sujeita ao regime de substituição tributária',
    category: 'SAÍDA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '5411',
    description: 'Devolução de compra para comercialização em operação com mercadoria sujeita ao regime de substituição tributária',
    category: 'SAÍDA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '5412',
    description: 'Devolução de bem do ativo imobilizado, em operação com mercadoria sujeita ao regime de substituição tributária',
    category: 'SAÍDA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '5413',
    description: 'Devolução de mercadoria destinada ao uso ou consumo, em operação com mercadoria sujeita ao regime de substituição tributária',
    category: 'SAÍDA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '5414',
    description: 'Remessa de produção do estabelecimento para venda fora do estabelecimento em operação com produto sujeito ao regime de substituição tributária',
    category: 'SAÍDA',
    type: 'REMESSA',
    application:
  },
  {
    code: '5415',
    description: 'Remessa de mercadoria adquirida ou recebida de terceiros para venda fora do estabelecimento, em operação com mercadoria sujeita ao regime de substituição tributária',
    category: 'SAÍDA',
    type: 'REMESSA',
    application:
  },
  {
    code: '5450',
    description: 'SISTEMAS DE INTEGRAÇÃO',
    category: 'SAÍDA',
    type: 'REMESSA',
    application:
  },
  {
    code: '5451',
    description: 'Remessa de animal e de insumo para estabelecimento produtor',
    category: 'SAÍDA',
    type: 'REMESSA',
    application:
  },
  {
    code: '5500',
    description: 'REMESSAS COM FIM ESPECÍFICO DE EXPORTAÇÃO E EVENTUAIS DEVOLUÇÕES',
    category: 'SAÍDA',
    type: 'REMESSA',
    application:
  },
  {
    code: '5501',
    description: 'Remessa de produção do estabelecimento, com fim específico de exportação',
    category: 'SAÍDA',
    type: 'REMESSA',
    application:
  },
  {
    code: '5502',
    description: 'Remessa de mercadoria adquirida ou recebida de terceiros, com fim específico de exportação',
    category: 'SAÍDA',
    type: 'REMESSA',
    application:
  },
  {
    code: '5503',
    description: 'Devolução de mercadoria recebida com fim específico de exportação',
    category: 'SAÍDA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '5504',
    description: 'Remessa de mercadorias para formação de lote de exportação, de produtos industrializados ou produzidos pelo próprio estabelecimento',
    category: 'SAÍDA',
    type: 'REMESSA',
    application:
  },
  {
    code: '5505',
    description: 'Remessa de mercadorias, adquiridas ou recebidas de terceiros, para formação de lote de exportação',
    category: 'SAÍDA',
    type: 'REMESSA',
    application:
  },
  {
    code: '5550',
    description: 'OPERAÇÕES COM BENS DE ATIVO IMOBILIZADO E MATERIAIS PARA USO OU CONSUMO',
    category: 'SAÍDA',
    type: 'OPERAÇÃO',
    application:
  },
  {
    code: '5551',
    description: 'Venda de bem do ativo imobilizado',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5552',
    description: 'Transferência de bem do ativo imobilizado',
    category: 'SAÍDA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '5553',
    description: 'Devolução de compra de bem para o ativo imobilizado',
    category: 'SAÍDA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '5554',
    description: 'Remessa de bem do ativo imobilizado para uso fora do estabelecimento',
    category: 'SAÍDA',
    type: 'REMESSA',
    application:
  },
  {
    code: '5555',
    description: 'Devolução de bem do ativo imobilizado de terceiro, recebido para uso no estabelecimento',
    category: 'SAÍDA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '5556',
    description: 'Devolução de compra de material de uso ou consumo',
    category: 'SAÍDA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '5557',
    description: 'Transferência de material de uso ou consumo',
    category: 'SAÍDA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '5600',
    description: 'CRÉDITOS E RESSARCIMENTOS DE ICMS',
    category: 'SAÍDA',
    type: 'CRÉDITO',
    application:
  },
  {
    code: '5601',
    description: 'Transferência de crédito de ICMS acumulado',
    category: 'SAÍDA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '5602',
    description: 'Transferência de saldo credor de ICMS para outro estabelecimento da mesma empresa, destinado à compensação de saldo devedor de ICMS',
    category: 'SAÍDA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '5603',
    description: 'Ressarcimento de ICMS retido por substituição tributária',
    category: 'SAÍDA',
    type: 'Ressarcimento',
    application:
  },
  {
    code: '5605',
    description: 'Transferência de saldo devedor de ICMS de outro estabelecimento da mesma empresa',
    category: 'SAÍDA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '5606',
    description: 'Utilização de saldo credor de ICMS para extinção por compensação de débitos fiscais',
    category: 'SAÍDA',
    type: 'UTILIZAÇÃO',
    application:
  },
  {
    code: '5651',
    description: 'Venda de combustível ou lubrificante de produção do estabelecimento destinado à industrialização subseqüente',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5652',
    description: 'Venda de combustível ou lubrificante de produção do estabelecimento destinado à comercialização',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5653',
    description: 'Venda de combustível ou lubrificante de produção do estabelecimento destinado a consumidor ou usuário final',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5654',
    description: 'Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado à industrialização subseqüente',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5655',
    description: 'Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado à comercialização',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5656',
    description: 'Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado a consumidor ou usuário final',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '5657',
    description: 'Remessa de combustível ou lubrificante adquirido ou recebido de terceiros para venda fora do estabelecimento',
    category: 'SAÍDA',
    type: 'REMESSA',
    application:
  },
  {
    code: '5658',
    description: 'Transferência de combustível ou lubrificante de produção do estabelecimento',
    category: 'SAÍDA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '5659',
    description: 'Transferência de combustível ou lubrificante adquirido ou recebido de terceiro',
    category: 'SAÍDA',
    type: 'TRANSFERÊNCIA',
    application:
  },
  {
    code: '5660',
    description: 'Devolução de compra de combustível ou lubrificante adquirido para industrialização subseqüente',
    category: 'SAÍDA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '5661',
    description: 'Devolução de compra de combustível ou lubrificante adquirido para comercialização',
    category: 'SAÍDA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '5662',
    description: 'Devolução de compra de combustível ou lubrificante adquirido por consumidor ou usuário final',
    category: 'SAÍDA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '5663',
    description: 'Remessa para armazenagem de combustível ou lubrificante',
    category: 'SAÍDA',
    type: 'REMESSA',
    application:
  },
  {
    code: '5664',
    description: 'Retorno de combustível ou lubrificante recebido para armazenagem',
    category: 'SAÍDA',
    type: 'RETORNO',
    application:
  },
  {
    code: '5665',
    description: 'Retorno simbólico de combustível ou lubrificante recebido para armazenagem',
    category: 'SAÍDA',
    type: 'RETORNO',
    application:
  },
  {
    code: '5666',
    description: 'Remessa por conta e ordem de terceiros de combustível ou lubrificante recebido para armazenagem',
    category: 'SAÍDA',
    type: 'REMESSA',
    application:
  },
  {
    code: '5900',
    description: 'OUTRAS SAÍDAS DE MERCADORIAS OU PRESTAÇÕES DE SERVIÇOS',
    category: 'SAÍDA',
    type: 'OUTRAS SAÍDAS',
    application:
  },
  {
    code: '5901',
    description: 'Remessa para industrialização por encomenda',
    category: 'SAÍDA',
    type: 'REMESSA',
    application:
  },
  {
    code: '5902',
    description: 'Retorno de mercadoria utilizada na industrialização por encomenda',
    category: 'SAÍDA',
    type: 'RETORNO',
    application:
  },
  {
    code: '5903',
    description: 'Retorno de mercadoria recebida para industrialização e não aplicada no referido processo',
    category: 'SAÍDA',
    type: 'RETORNO',
    application:
  },
  {
    code: '5904',
    description: 'Remessa para venda fora do estabelecimento',
    category: 'SAÍDA',
    type: 'REMESSA',
    application:
  },
  {
    code: '5905',
    description: 'Remessa para depósito fechado ou armazém geral',
    category: 'SAÍDA',
    type: 'REMESSA',
    application:
  },
  {
    code: '5906',
    description: 'Retorno de mercadoria depositada em depósito fechado ou armazém geral',
    category: 'SAÍDA',
    type: 'RETORNO',
    application:
  },
  {
    code: '5907',
    description: 'Retorno simbólico de mercadoria depositada em depósito fechado ou armazém geral',
    category: 'SAÍDA',
    type: 'RETORNO',
    application:
  },
  {
    code: '5908',
    description: 'Remessa de bem por conta de contrato de comodato',
    category: 'SAÍDA',
    type: 'REMESSA',
    application:
  },
  {
    code: '5909',
    description: 'Retorno de bem recebido por conta de contrato de comodato',
    category: 'SAÍDA',
    type: 'RETORNO',
    application:
  },
  {
    code: '5910',
    description: 'Remessa em bonificação, doação ou brinde',
    category: 'SAÍDA',
    type: 'REMESSA',
    application:
  },
  {
    code: '5911',
    description: 'Remessa de amostra grátis',
    category: 'SAÍDA',
    type: 'REMESSA',
    application:
  },
  {
    code: '5912',
    description: 'Remessa de mercadoria ou bem para demonstração',
    category: 'SAÍDA',
    type: 'REMESSA',
    application:
  },
  {
    code: '5913',
    description: 'Retorno de mercadoria ou bem recebido para demonstração',
    category: 'SAÍDA',
    type: 'RETORNO',
    application:
  },
  {
    code: '5914',
    description: 'Remessa de mercadoria ou bem para exposição ou feira',
    category: 'SAÍDA',
    type: 'REMESSA',
    application:
  },
  {
    code: '5915',
    description: 'Remessa de mercadoria ou bem para conserto ou reparo',
    category: 'SAÍDA',
    type: 'REMESSA',
    application:
  },
  {
    code: '5916',
    description: 'Retorno de mercadoria ou bem recebido para conserto ou reparo',
    category: 'SAÍDA',
    type: 'RETORNO',
    application:
  },
  {
    code: '5917',
    description: 'Remessa de mercadoria em consignação mercantil ou industrial',
    category: 'SAÍDA',
    type: 'REMESSA',
    application:
  },
  {
    code: '5918',
    description: 'Devolução de mercadoria recebida em consignação mercantil ou industrial',
    category: 'SAÍDA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '5919',
    description: 'Devolução simbólica de mercadoria vendida ou utilizada em processo industrial, recebida anteriormente em consignação mercantil ou industrial',
    category: 'SAÍDA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '5920',
    description: 'Remessa de vasilhame ou sacaria',
    category: 'SAÍDA',
    type: 'REMESSA',
    application:
  },
  {
    code: '5921',
    description: 'Devolução de vasilhame ou sacaria',
    category: 'SAÍDA',
    type: 'DEVOLUÇÃO',
    application:
  },
  {
    code: '5922',
    description: 'Lançamento efetuado a título de simples faturamento decorrente de venda para entrega futura',
    category: 'SAÍDA',
    type: 'LANÇAMENTO',
    application:
  },
  {
    code: '5923',
    description: 'Remessa de mercadoria por conta e ordem de terceiros, em venda à ordem',
    category: 'SAÍDA',
    type: 'REMESSA',
    application:
  },
  {
    code: '5924',
    description: 'Remessa para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente',
    category: 'SAÍDA',
    type: 'REMESSA',
    application:
  },
  {
    code: '5925',
    description: 'Retorno de mercadoria recebida para industrialização por conta e ordem do adquirente da mercadoria, quando aquela não transitar pelo estabelecimento do adquirente',
    category: 'SAÍDA',
    type: 'RETORNO',
    application:
  },
  {
    code: '5926',
    description: 'Lançamento efetuado a título de reclassificação de mercadoria decorrente de formação de kit ou de sua desagregação',
    category: 'SAÍDA',
    type: 'LANÇAMENTO',
    application:
  },
  {
    code: '5927',
    description: 'Lançamento efetuado a título de baixa de estoque decorrente de perda, roubo ou deterioração',
    category: 'SAÍDA',
    type: 'LANÇAMENTO',
    application:
  },
  {
    code: '5928',
    description: 'Lançamento efetuado a título de baixa de estoque decorrente do encerramento da atividade da empresa',
    category: 'SAÍDA',
    type: 'LANÇAMENTO',
    application:
  },
  {
    code: '5929',
    description: 'Lançamento efetuado em decorrência de emissão de documento fiscal relativo a operação ou prestação também registrada em equipamento Emissor de Cupom Fiscal - ECF',
    category: 'SAÍDA',
    type: 'LANÇAMENTO',
    application:
  },
  {
    code: '5931',
    description: 'Lançamento efetuado em decorrência da responsabilidade de retenção do imposto por substituição tributária, atribuída ao remetente ou alienante da mercadoria, pelo serviço de transporte realizado por transportador autônomo ou por transportador não inscrito na unidade da Federação onde iniciado o serviço',
    category: 'SAÍDA',
    type: 'LANÇAMENTO',
    application:
  },
  {
    code: '5932',
    description: 'Prestação de serviço de transporte iniciada em unidade da Federação diversa daquela onde inscrito o prestador',
    category: 'SAÍDA',
    type: 'PRESTAÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '5933',
    description: 'Prestação de serviço tributado pelo ISSQN',
    category: 'SAÍDA',
    type: 'PRESTAÇÃO DE SERVIÇO',
    application:
  },
  {
    code: '5949',
    description: 'Outra saída de mercadoria ou prestação de serviço não especificada',
    category: 'SAÍDA',
    type: 'OUTRAS SAÍDAS',
    application:
  },
  {
    code: '6000',
    description: 'SAÍDAS OU PRESTAÇÕES DE SERVIÇOS PARA OUTROS ESTADOS',
    category: 'SAÍDA',
    type: 'SAÍDAS',
    application:
  },
  {
    code: '6100',
    description: 'VENDAS DE PRODUÇÃO PRÓPRIA OU DE TERCEIROS',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '6101',
    description: 'Venda de produção do estabelecimento',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '6102',
    description: 'Venda de mercadoria adquirida ou recebida de terceiros',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '6103',
    description: 'Venda de produção do estabelecimento, efetuada fora do estabelecimento',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '6104',
    description: 'Venda de mercadoria adquirida ou recebida de terceiros, efetuada fora do estabelecimento',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '6105',
    description: 'Venda de produção do estabelecimento que não deva por ele transitar',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '6106',
    description: 'Venda de mercadoria adquirida ou recebida de terceiros, que não deva por ele transitar',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '6107',
    description: 'Venda de produção do estabelecimento, destinada a não contribuinte',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '6108',
    description: 'Venda de mercadoria adquirida ou recebida de terceiros, destinada a não contribuinte',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '6109',
    description: 'Venda de produção do estabelecimento, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '6110',
    description: 'Venda de mercadoria adquirida ou recebida de terceiros, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '6111',
    description: 'Venda de produção do estabelecimento remetida anteriormente em consignação industrial',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '6112',
    description: 'Venda de mercadoria adquirida ou recebida de Terceiros remetida anteriormente em consignação industrial',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '6113',
    description: 'Venda de produção do estabelecimento remetida anteriormente em consignação mercantil',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '6114',
    description: 'Venda de mercadoria adquirida ou recebida de terceiros remetida anteriormente em consignação mercantil',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '6115',
    description: 'Venda de mercadoria adquirida ou recebida de terceiros, recebida anteriormente em consignação mercantil',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '6116',
    description: 'Venda de produção do estabelecimento originada de encomenda para entrega futura',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '6117',
    description: 'Venda de mercadoria adquirida ou recebida de terceiros, originada de encomenda para entrega futura',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '6118',
    description: 'Venda de produção do estabelecimento entregue ao destinatário por conta e ordem do adquirente originário, em venda à ordem',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '6119',
    description: 'Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário por conta e ordem do adquirente originário, em venda à ordem',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '6120',
    description: 'Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário pelo vendedor remetente, em venda à ordem',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '6122',
    description: 'Venda de produção do estabelecimento remetida para industrialização, por conta e ordem do adquirente, sem transitar pelo estabelecimento do adquirente',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '6123',
    description: 'Venda de mercadoria adquirida ou recebida de terceiros remetida para industrialização, por conta e ordem do adquirente, sem transitar pelo estabelecimento do adquirente',
    category: 'SAÍDA',
    type: 'VENDA',
    application:
  },
  {
    code: '6124',
    description: 'Industrialização efetuada para outra empresa',
    category: 'SAÍDA',
    type: 'Industrialização',
    application:
  },

] as const;