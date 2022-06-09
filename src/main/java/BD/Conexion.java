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
          //conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/middlepoint?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC","root","root");
          
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
   
   public static int insertarEjercicio(String id, String titulo, String x1, String y1, String x2, String y2, String tipo, String r1, String r2){
              
       String json = "{ \"id\" : \"" + id + "\" , "
          + "\"titulo\" : \"" + titulo + "\" , " 
          + "\"x1\" : \"" + x1 + "\" , " 
          + "\"y1\" : \"" + y1 + "\" , " 
          + "\"x2\" : \"" + x2 + "\" , " 
          + "\"y2\" : \"" + y2 + "\" , " 
          + "\"tipo\" : \"" + tipo + "\" , " 
          + "\"r1\" : \"" + r1 + "\" , " 
          + "\"r2\" : \"" + r2 + "\" }";
       
       String query = "INSERT INTO EJERCICIOS(EJERCICIO) VALUES('" + json+ "');";
       System.out.println(query);
       
       try{
          st = conn.prepareStatement(query);
          
          int rows = st.executeUpdate();
          
          st.close();
          
          return rows;
          
       }catch(Exception e){
           System.out.println("Error al ejecutar la consulta");
       }
       return 0;
   }
   
   public static int actualizarEjercicio(String id, String titulo, String x1, String y1, String x2, String y2, String tipo, String r1, String r2){
              
       String json = "{ \"id\" : \"" + id + "\" , "
          + "\"titulo\" : \"" + titulo + "\" , " 
          + "\"x1\" : \"" + x1 + "\" , " 
          + "\"y1\" : \"" + y1 + "\" , " 
          + "\"x2\" : \"" + x2 + "\" , " 
          + "\"y2\" : \"" + y2 + "\" , " 
          + "\"tipo\" : \"" + tipo + "\" , " 
          + "\"r1\" : \"" + r1 + "\" , " 
          + "\"r2\" : \"" + r2 + "\" }";
       
       String query = "UPDATE EJERCICIOS SET EJERCICIO='" + json + "' WHERE json_extract(ejercicio, '$.id') = \""+ id + "\";";
       System.out.println(query);
       
       try{
          st = conn.prepareStatement(query);
          
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
       
       String query = "SELECT * FROM EJERCICIOS;";
       
       StringBuilder json = new StringBuilder();
            json.append("[ ");
       
       try{
          st = conn.prepareStatement(query);
          rs = st.executeQuery(query);
          
          boolean next = rs.next();
          
           while(next){
           
               String cadena=rs.getString("ejercicio");
                json.append(cadena);
                next = rs.next();
                
                if(next){
                    json.append(", ");
                }
           }
           
           json.append(" ]");
           
           rs.close();
           st.close();
           
           return json;
          
       }catch(Exception e){
           System.out.println("Error al ejecutar la consulta");
       }
       return null;
   }
   
   public static StringBuilder getEjercicio(String id){
       
       ResultSet rs = null;
       
       String query = "SELECT * FROM EJERCICIOS WHERE json_extract(ejercicio, '$.id') = \""+id+"\";";
       
       StringBuilder json = new StringBuilder();
            json.append("[ ");
       
       try{
          st = conn.prepareStatement(query);
          rs = st.executeQuery(query);
          
          
           if(rs.next()){
           
               String cadena=rs.getString("ejercicio");
                json.append(cadena);
                
           }
           
           json.append(" ]");
           
           rs.close();
           st.close();
           
           return json;
          
       }catch(Exception e){
           System.out.println("Error al ejecutar la consulta");
       }
       return null;
   }
   
}
