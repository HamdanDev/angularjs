using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


public class Student
{
    public int Id { get; internal set; }
    public string Name { get; set; }
    public int Age { get; set; }
    public string City { get; set; }

    public Student() { }
    public Student(int id, string Name, int Age, string City)
    {
        this.Id = id;
        this.Name = Name;
        this.Age = Age;
    }
}
