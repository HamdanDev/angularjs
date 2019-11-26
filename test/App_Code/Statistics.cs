using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Statistics
/// </summary>
public class Statistics
{
    public int total { get; set; }
    public float ageAvrage { get; set; }

    public Statistics() { }
    public Statistics(int total, float ageAvrage) {
        this.total = total;
        this.ageAvrage = ageAvrage;
    }


}
