package API;

import BD.Conexion;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Eliminar extends HttpServlet {
    
    Connection conn = Conexion.getConnection();

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String id = request.getParameter("id");
               
        if(Conexion.eliminarEjercicio(id) > 0){
            System.out.println("Eliminado");
            response.sendRedirect("./index.html");
        }else{
            System.out.println("Error al eliminar");
        }
        
    }

}
