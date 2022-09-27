# 4. criando função para criar um modelo normalizado dos parametros de pesquisa (default) + parametros sem default
# da requisição do usuario
def normalize_path_params(  cidade = None, 
                            estrelas_min = 0, 
                            estrelas_max = 5, 
                            diaria_min = 0, 
                            diaria_max = 10000, 
                            limit = 50, 
                            offset = 0, **dados ):
    # 4. se cidade foi passada:
    if cidade:
        return {
            'estrelas_min': estrelas_min,
            'estrelas_max': estrelas_max,
            'diaria_min': diaria_min,
            'diaria_max': diaria_max,
            'cidade': cidade,
            'limit': limit,
            'offset': offset
        }
    # 4. caso cidade não tenha sido passada:
    return {
            'estrelas_min': estrelas_min,
            'estrelas_max': estrelas_max,
            'diaria_min': diaria_min,
            'diaria_max': diaria_max,
            'limit': limit,
            'offset': offset
        }


consulta_sem_cidade = "SELECT * FROM hoteis \
                        WHERE (estrelas >= ? and estrelas <= ?) \
                        and (diaria >= ? and diaria <= ?) \
                        LIMIT ? OFFSET ?"

consulta_com_cidade = "SELECT  * FROM hoteis \
                        WHERE   (estrelas >= ? and estrelas <= ?) \
                                and (diaria >= ? and diaria <= ?) \
                                and cidade = ? \
                        LIMIT   ? \
                        OFFSET  ?"