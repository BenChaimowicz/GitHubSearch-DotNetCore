using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace GitHubSearchIV.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SessionController : ControllerBase
    {
        [HttpGet("getSession")]
        public string GetSession()
        {
            return HttpContext.Session.GetString("sessionList");
        }

        [HttpGet("setSession/{data}")]
        public IActionResult SetSession(string data)
        {
            HttpContext.Session.SetString("sessionList", data);
            return Ok("Session set");            
            }
    }

    public class Repository
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string AvatarURL { get; set; }
    }


}