using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GitHubSearchIV.Classes
{
    public class BookmarkedRepo
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string AvatarURL { get; set; }
    }

    public class BookmarkedList
    {
        public List<BookmarkedRepo> bookmarkedRepos = new List<BookmarkedRepo>();

        public void AddToList(BookmarkedRepo repo)
        {
            bookmarkedRepos.Add(repo);
        }

        public string GetListAsJSON()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(bookmarkedRepos);
        }
    }
}
