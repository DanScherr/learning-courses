# imagem a ser utilizada
FROM fedora

# comandos que serão rodados ao buildar o container
RUN yum install -y figlet

# comando estático
ENTRYPOINT [ "figlet" ]

# comando que pode ser sobrescrito com o run
CMD ["Hello Docker!!"]