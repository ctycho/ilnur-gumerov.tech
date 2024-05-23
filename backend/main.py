""" Social app entry point"""
import uvicorn
import argparse


parser = argparse.ArgumentParser(
    prog='ModelFS',
    description='Model file system. It\'s a CRUD application to work with files')

parser.add_argument('--host', help='define IP address', type=str, required=True)
parser.add_argument('--port', help='define PORT', type=int, required=True)
args = parser.parse_args()

# 127.0.0.1
HOST = args.host
PORT = args.port


def main():
    uvicorn.run("app.api:app", host=HOST, port=PORT, reload=True)


if __name__ == "__main__":
    main()
