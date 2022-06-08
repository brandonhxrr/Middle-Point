package API;

import BD.Conexion;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Guardar extends HttpServlet {
    
    Connection conn = Conexion.getConnection();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String id = request.getParameter("id");
        
        String x1 = request.getParameter("x1");
        String y1 = request.getParameter("y1");
        
        String x2 = request.getParameter("x2");
        String y2 = request.getParameter("y2");
        
        String tipo = request.getParameter("tipo");
        
        String titulo = "";
        
        if(tipo.equals("distance")){
            titulo = "Encontrar la distancia entre los puntos ";
        }else{
            titulo = "Hallar el punto medio entre ";
        }
        
        titulo += "(" + x1 +" , " + y1 + ") y " + "(" + x2 +" , " + y2 + ")";
        
        if(Conexion.insertarEjercicio(id, titulo, x1, y1, x2, y2, tipo) > 0){
            System.out.println("Insertado");
            response.sendRedirect("./index.html");
        }else{
            System.out.println("Error al insertar");
        }
        
        
        
        
        
        try (PrintWriter out = response.getWriter()) {
           
        }
    }

}
