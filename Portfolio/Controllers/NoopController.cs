using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NoopController : ControllerBase
    {
        private ILogger<NoopController> _logger;

        public NoopController(ILogger<NoopController> logger)
        {
            _logger = logger;
        }

        /*
        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            // at this point publishing happens only on Github Pages that supports only static pages
        }
        */
    }
}