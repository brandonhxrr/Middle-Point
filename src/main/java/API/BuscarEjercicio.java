package API;

import BD.Conexion;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class BuscarEjercicio extends HttpServlet {
    
    Connection conn = Conexion.getConnection();
   
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try ( PrintWriter out = response.getWriter()) {
            
            String id = request.getParameter("id");
            
            StringBuilder json = Conexion.getEjercicio(id);
            out.write(json.toString());
        }
    }

}
