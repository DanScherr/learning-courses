<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
    <head>
        <link rel="stylesheet" href="webjars/bootstrap/5.1.3/css/bootstrap.min.css">
        <title>Welcome Page</title>

    </head>
    <body>
        <div class="container">

            <div class="container text-center">
                <div class="card">
                    <h4 class="card-header">
                        Here are your to-do's, ${name}:
                    </h4>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Description</th>
                                    <th>TargetDate</th>
                                    <th>Is Done</th>
                                </tr>
                            </thead>
                            <tbody>
                                <c:forEach items="${todos}" var="todo">
                                    <tr>
                                        <td>${todo.id}</td>
                                        <td>${todo.description}</td>
                                        <td>${todo.targetDate}</td>
                                        <td>${todo.done}</td>
                                    </tr>
                                </c:forEach>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <script src="webjars/bootstrap/5.1.3/js/bootstrap.min.js"></script>
        <script src="webjars/jquery/3.6.0/jquery.min.js"></script>
    </body>
</html>