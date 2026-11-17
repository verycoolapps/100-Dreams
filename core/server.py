# Local static server (127.0.0.1 only) for opening multi-file packages from Blender.
import functools
import http.server
import threading

_servers = {}


class _Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a):
        pass


def serve(directory):
    if directory in _servers:
        return _servers[directory][1]
    handler = functools.partial(_Quiet, directory=directory)
    srv = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
    t = threading.Thread(target=srv.serve_forever, daemon=True)
    t.start()
    url = f"http://127.0.0.1:{srv.server_address[1]}/"
    _servers[directory] = (srv, url)
    return url


def stop_all():
    for srv, _ in _servers.values():
        try:
            srv.shutdown(); srv.server_close()
        except Exception:
            pass
    _servers.clear()
