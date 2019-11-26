using System.Collections.Generic;
using System.Web.Script.Serialization;
using System.Web.Services;
using System.Linq;

[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
[System.Web.Script.Services.ScriptService]
[System.ComponentModel.ToolboxItem(false)]

public class StudentService : System.Web.Services.WebService
{
    [WebMethod]
    public void GetStudent(int id)
    {
        List<Student> lst1 = new List<Student>();
        lst1.Add(new Student() { Id = 1, Name = "Omar", Age = 25, City = "Tetouan" });
        lst1.Add(new Student() { Id = 2, Name = "Ayoub", Age = 25, City = "Tetouan" });
        lst1.Add(new Student() { Id = 3, Name = "Reda", Age = 24, City = "casa" });
        lst1.Add(new Student() { Id = 4, Name = "Outman", Age = 23, City = "tanger" });
        lst1.Add(new Student() { Id = 5, Name = "Ali", Age = 25, City = "chefchaoun" });

        var st1 = from s in lst1
                 where s.Id == id
                 select s;

        JavaScriptSerializer js1 = new JavaScriptSerializer();
        Context.Response.Write(js1.Serialize(st1));
    }

    [WebMethod]
    public void GetStudentByName(string name)
    {
        List<Student> lst1 = new List<Student>();
        lst1.Add(new Student() { Id = 1, Name = "Omar", Age = 25, City = "Tetouan" });
        lst1.Add(new Student() { Id = 2, Name = "Ayoub", Age = 25, City = "Tetouan" });
        lst1.Add(new Student() { Id = 3, Name = "Reda", Age = 24, City = "casa" });
        lst1.Add(new Student() { Id = 4, Name = "Outman", Age = 23, City = "tanger" });
        lst1.Add(new Student() { Id = 5, Name = "Ali", Age = 25, City = "chefchaoun" });
        lst1.Add(new Student() { Id = 6, Name = "simon", Age = 25, City = "tokyo" });


        var st1 = from s in lst1
                  where s.Name.ToLower().Contains(name.ToLower())
                  select s;

        JavaScriptSerializer js1 = new JavaScriptSerializer();
        Context.Response.Write(js1.Serialize(st1));
    }

    [WebMethod]
    public void GetStudents()
    {
        //System.Threading.Thread.Sleep(2000); 
        List<Student> lst2 = new List<Student>();
        lst2.Add(new Student() { Id = 1, Name = "Omar", Age = 25, City = "Tetouan" });
        lst2.Add(new Student() { Id = 2, Name = "Ayoub", Age = 25, City = "Tetouan" });
        lst2.Add(new Student() { Id = 3, Name = "Reda", Age = 24, City = "casa" });
        lst2.Add(new Student() { Id = 4, Name = "Outman", Age = 23, City = "tanger" });
        lst2.Add(new Student() { Id = 5, Name = "Ali", Age = 25, City = "chefchaoun" });
        lst2.Add(new Student() { Id = 6, Name = "simon", Age = 25, City = "tokyo" });
        lst2.Add(new Student() { Id = 7, Name = "rick", Age = 25, City = "u.s.a" });

        JavaScriptSerializer js2 = new JavaScriptSerializer();
        Context.Response.Write(js2.Serialize(lst2));
        
    }

    [WebMethod]
    public void GetStudentsStatistics()
    {
        //System.Threading.Thread.Sleep(1500); waiting page
        List<Student> lst2 = new List<Student>();
        lst2.Add(new Student() { Id = 1, Name = "Omar", Age = 25, City = "Tetouan" });
        lst2.Add(new Student() { Id = 2, Name = "Ayoub", Age = 25, City = "Tetouan" });
        lst2.Add(new Student() { Id = 3, Name = "Reda", Age = 24, City = "casa" });
        lst2.Add(new Student() { Id = 4, Name = "Outman", Age = 23, City = "tanger" });
        lst2.Add(new Student() { Id = 5, Name = "Ali", Age = 25, City = "chefchaoun" });
        lst2.Add(new Student() { Id = 6, Name = "simon", Age = 25, City = "tokyo" });
        lst2.Add(new Student() { Id = 7, Name = "rick", Age = 25, City = "u.s.a" });


        float age = 0;
        foreach (var Student in lst2)
        {
            age += Student.Age;
        }

        var st = new Statistics() { total = lst2.Count, ageAvrage = (age / lst2.Count) };

        JavaScriptSerializer js2 = new JavaScriptSerializer();
        Context.Response.Write(js2.Serialize(st));

    }


}
