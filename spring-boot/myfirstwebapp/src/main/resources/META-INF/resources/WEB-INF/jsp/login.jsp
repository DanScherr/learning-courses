<html>
    <head>
        <link rel="stylesheet" href="webjars/bootstrap/5.1.3/css/bootstrap.min.css">
        <title>Login</title>
    </head>
    <body>
        <div class="container">
            <h1>Welcome to Login page!</h1>
            <pre>${errorMessage}</pre>
            <form method="post">
                <div class="form-group">
                    <label for="formGroupExampleInput">Name:</label>
                    <input type="text" name="name" 
                        class="form-control" id="formGroupExampleInput"
                        placeholder="Username"></div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password: </label>
                    <input type="password" class="form-control" 
                        id="exampleInputPassword1" placeholder="Password" 
                        name="password">
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <!--<input type="submit">-->
                </div>
            </form>
        </div>
        <script src="webjars/bootstrap/5.1.3/js/bootstrap.min.js"></script>
        <script src="webjars/jquery/3.6.0/jquery.min.js"></script>
    </body>
</html>