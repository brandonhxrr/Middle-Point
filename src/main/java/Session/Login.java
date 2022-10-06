package Session;

import BD.Conexion;
import Singletons.User;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class Login extends HttpServlet {

    Connection conn = Conexion.getConnection();
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        
        String user = request.getParameter("user");
        String pass = request.getParameter("password");
                
        try (PrintWriter out = response.getWriter()) {
            if(request.getParameter("btn")!=null){
                             
                if(user==null||user.equals("")||pass==null||pass.equals("")){ 
                    
                    out.print("Ingrese el usuario/contraseña");
                    
                }else{
                    User us = Conexion.buscarUsuario(user, pass);
                    
                    if(us != null){
                        if((user.equals(us.getUser()) || user.equals(us.getEmail())) && pass.equals(us.getPassword())){
                                                        
                            HttpSession session=request.getSession();
                            session.setAttribute("usuario", us.getUser());
                            session.setAttribute("nombre", us.getName());
                            session.setAttribute("correo", us.getEmail());
                            session.setAttribute("contraseña", pass);
                            
                            response.sendRedirect("./bienvenido.jsp");
 
                        }else{
                            request.setAttribute("usuario", user);
                            request.setAttribute("contraseña", pass);
                            response.sendRedirect("./error.jsp");
                            
                        }
                    }else{
                        request.setAttribute("usuario", user);
                        request.setAttribute("contraseña", pass);
                        response.sendRedirect("./error.jsp");
                    }
                }
                out.close();
                conn.close();
                
            }
            
        } catch (SQLException ex) {
            Logger.getLogger(Login.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }

}
