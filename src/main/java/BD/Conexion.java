package BD;

import Singletons.User;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Conexion {
   private static Connection conn;
   private static PreparedStatement st = null;
     
   public static Connection getConnection(){
       
       
       try{
          Class.forName("com.mysql.cj.jdbc.Driver");
          conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/middlepoint?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC","root","rootroot");
          
           System.out.println("Base de datos conectada");
          return conn;
       }catch(SQLException ex){
           System.out.println("No se pudo conectar la base de datos");
           System.out.println("SQLException: " + ex.getMessage());
           System.out.println("SQLState: " + ex.getSQLState());
           System.out.println("VendorError: " + ex.getErrorCode());
           
       } catch (ClassNotFoundException ex) {
           Logger.getLogger(Conexion.class.getName()).log(Level.SEVERE, null, ex);
       }
       return null;
   }
   
   public static ResultSet buscar(String query){
       
       ResultSet rs = null;
       
       try{
          st = conn.prepareStatement(query);
          rs = st.executeQuery(query);
          
         //st.close();
         
         return rs;
          
       }catch(Exception e){
           System.out.println("Error al ejecutar la consulta");
           return null;
       }
   }
   
   public static User buscarUsuario(String user, String password){
       
       ResultSet rs = null;
       
       String query = "SELECT * FROM USERS WHERE USER = '" + user + "' OR EMAIL ='"+user+"';";
       
       try{
          st = conn.prepareStatement(query);
          rs = st.executeQuery(query);
          
           if(rs.next()){
           
               return new User(rs.getString("name"), rs.getString("user"), rs.getString("password"), rs.getString("email"));
           }
           
           rs.close();
           st.close();
          
       }catch(Exception e){
           System.out.println("Error al ejecutar la consulta");
       }
       return null;
   }
   
   public static int insertarMensaje(String name, String mail, String message){
              
       String query = "INSERT INTO MESSAGES(NAME, EMAIL, MESSAGE) VALUES(?, ?, ?)";
       
       try{
          st = conn.prepareStatement(query);
          
          st.setString(1, name);
          st.setString(2, mail);
          st.setString(3, message);
          
          int rows = st.executeUpdate();
          
          
          st.close();
          
          return rows;
          
       }catch(Exception e){
           System.out.println("Error al ejecutar la consulta");
       }
       return 0;
   }
   
   public static StringBuilder getJSON(){
       
       ResultSet rs = null;
       
       String query = "SELECT * FROM tablajson;";
       
       StringBuilder json = new StringBuilder();
            json.append("[");
       
       try{
          st = conn.prepareStatement(query);
          rs = st.executeQuery(query);
          
           while(rs.next()){
           
               String cadena=rs.getString("columnajson");
                json.append(cadena);
           }
           
           json.append("]");
           
           rs.close();
           st.close();
           
           return json;
          
       }catch(Exception e){
           System.out.println("Error al ejecutar la consulta");
       }
       return null;
   }
   
}
