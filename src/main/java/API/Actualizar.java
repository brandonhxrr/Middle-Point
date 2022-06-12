package API;

import BD.Conexion;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Actualizar extends HttpServlet {
    
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
        
        String r1, r2;
        
        String titulo = "";
        
        String puntos = "";
        
        String procedimiento = "";
        
        Double X1, X2, Y1, Y2, res;
        
        X1 = Double.parseDouble(x1);
        Y1 = Double.parseDouble(y1);
        
        X2 = Double.parseDouble(x2);
        Y2 = Double.parseDouble(y2);
        
        
        if(tipo.equals("distance")){
            titulo = "Encontrar la distancia entre los puntos ";
            r1 = "true";
            r2 = "false";
            puntos = "[ { \"x\" : \"" + x1 +"\", \"y\" : \"" + y1 +"\"}, { \"x\" : \"" + x2 +"\", \"y\" : \"" + y2 +"\"} ]";
            
            procedimiento = "[ {\"l1\" : \"d = raiz((" + x2 + " - " + x1 + ")^2" + " + (" + y2 + " - " + y1 + ")^2)\" , " + 
                    "\"l2\" : \"d = raiz((" + String.valueOf(X2 - X1) + ")^2 + (" + String.valueOf(Y2 - Y1) + ")^2)\" , " + 
                    "\"l3\" : \"d = raiz("+String.valueOf(Math.pow(X2 - X1, 2)) + " + " + String.valueOf(Math.pow(Y2 - Y1, 2)) + ")\" , " + 
                    "\"l4\" : \"d = raiz("+String.valueOf(Math.pow(X2 - X1, 2) + Math.pow(Y2 - Y1, 2)) + ")\" , " +
                    "\"l5\" : \"d = " + String.valueOf(Math.sqrt(Math.pow(X2 - X1, 2) + Math.pow(Y2 - Y1, 2))) + "\" } ]"  ;
        }else{
            titulo = "Hallar el punto medio entre ";
            r2 = "true";
            r1 = "false";
            
            String x3 = String.valueOf((X2+X1)/2);
            String y3 = String.valueOf((Y2+Y1)/2);
            
            puntos = "[ { \"x\" : \"" + x1 +"\", \"y\" : \"" + y1 +"\"}, { \"x\" : \"" + x3 +"\", \"y\" : \"" + y3 +"\"}, { \"x\" : \"" + x2 +"\", \"y\" : \"" + y2 +"\"} ]";
            
            procedimiento = "[ {\"l1\" : \"m = ( (" + x2 + " + " + x1 + ")/2 , (" + y2 + " + " + y1 + ")/2)\" , " + 
                    " \"l2\" : \"m = (" + String.valueOf(X2 + X1) + "/2 , " + String.valueOf(Y2 + Y1) + "/2)\" , " +
                    " \"l3\" : \"m = ("+x3 + " , " + y3 + ")\" } ]" ;
                
        }
        
        titulo += "(" + x1 +" , " + y1 + ") y " + "(" + x2 +" , " + y2 + ")";
        System.out.println("Actualizado");
        
        if(Conexion.actualizarEjercicio(id, titulo, x1, y1, x2, y2, tipo, r1, r2, puntos, procedimiento) > 0){
            System.out.println("Actualizado");
            response.sendRedirect("./index.html");
        }else{
            System.out.println("Error al actualizar");
        }
        
        
        
        
        
        try (PrintWriter out = response.getWriter()) {
           
        }
    }

}
