using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using sb360.Models;

namespace sb360.Controllers
{
    public class NamespacesController : ApiController
    {
        private TrailDbEntities db = new TrailDbEntities();

        // GET: api/Namespaces
        public IQueryable<Namespace> GetNamespaces()
        {
            return db.Namespaces;
        }

        // GET: api/Namespaces/5
        [ResponseType(typeof(Namespace))]
        public IHttpActionResult GetNamespace(int id)
        {
            Namespace @namespace = db.Namespaces.Find(id);
            if (@namespace == null)
            {
                return NotFound();
            }

            return Ok(@namespace);
        }

        // PUT: api/Namespaces/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutNamespace(int id, Namespace @namespace)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != @namespace.Id)
            {
                return BadRequest();
            }

            db.Entry(@namespace).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NamespaceExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Namespaces
        [ResponseType(typeof(Namespace))]
        public IHttpActionResult PostNamespace(Namespace @namespace)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Namespaces.Add(@namespace);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = @namespace.Id }, @namespace);
        }

        // DELETE: api/Namespaces/5
        [ResponseType(typeof(Namespace))]
        public IHttpActionResult DeleteNamespace(int id)
        {
            Namespace @namespace = db.Namespaces.Find(id);
            if (@namespace == null)
            {
                return NotFound();
            }

            db.Namespaces.Remove(@namespace);
            db.SaveChanges();

            return Ok(@namespace);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool NamespaceExists(int id)
        {
            return db.Namespaces.Count(e => e.Id == id) > 0;
        }
    }
}