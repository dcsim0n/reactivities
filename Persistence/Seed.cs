using System;
using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if(!context.Activities.Any())
            {
                var activities = new List<Activity>
                {
                    new Activity
                    {
                        Title = "Future Activity 1",
                        Date = DateTime.Now.AddMonths(1),
                        Description = "Activity 1 month in the future",
                        Category = "file",
                        City = "London",
                        Venue = "Cinema",
                    }
                };
                context.Activities.AddRange(activities);
                context.SaveChanges();
            }
        }
        
    }
}